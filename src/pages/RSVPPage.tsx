import { useState } from 'react';
import { Heart, CheckCircle, AlertCircle, User, Mail, Users, UtensilsCrossed, MessageSquare } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { supabase } from '../lib/supabase';

interface RSVPForm {
  name: string;
  email: string;
  attending: string;
  guestCount: number;
  mealPreference: string;
  dietaryRestrictions: string;
  message: string;
}

const RSVPPage = () => {
  const [form, setForm] = useState<RSVPForm>({
    name: '',
    email: '',
    attending: '',
    guestCount: 1,
    mealPreference: '',
    dietaryRestrictions: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase.from('rsvp_responses').insert([
        {
          name: form.name,
          email: form.email,
          attending: form.attending === 'yes',
          guest_count: form.attending === 'yes' ? Number(form.guestCount) : 0,
          meal_preference: form.mealPreference || null,
          dietary_restrictions: form.dietaryRestrictions || null,
          message: form.message || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (submitError) throw submitError;

      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        attending: '',
        guestCount: 1,
        mealPreference: '',
        dietaryRestrictions: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting your RSVP. Please try again.');
      console.error('RSVP submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <HeroSection
          title="Thank You!"
          subtitle="Your response has been recorded"
          showDivider={true}
        />
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="font-serif text-3xl text-gray-800 mb-4">
              We've Received Your RSVP
            </h2>
            <p className="font-sans text-gray-600 mb-8">
              Thank you for letting us know! We're so excited to celebrate this special day with you.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-blush-500 hover:bg-blush-600 text-white font-sans text-sm uppercase tracking-wider rounded-full transition-colors duration-300"
            >
              Submit Another Response
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        title="RSVP"
        subtitle="We would be honored by your presence at our wedding celebration"
        date="Please respond by September 15, 2026"
      />

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          {/* Decorative Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-px bg-blush-300" />
              <Heart className="w-6 h-6 text-blush-400" fill="currentColor" />
              <span className="w-16 h-px bg-blush-300" />
            </div>
            <p className="font-serif text-xl text-gray-700 italic">
              "Your presence is the greatest gift"
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                  placeholder="Jane Smith"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                  placeholder="jane@email.com"
                />
              </div>
            </div>

            {/* Attending */}
            <div>
              <label className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-3">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, attending: 'yes' }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    form.attending === 'yes'
                      ? 'border-blush-500 bg-blush-50 text-blush-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-blush-300'
                  }`}
                >
                  <Heart className="w-6 h-6 mx-auto mb-2" fill={form.attending === 'yes' ? 'currentColor' : 'none'} />
                  <span className="font-sans text-sm uppercase tracking-wider">
                    Joyfully Accept
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, attending: 'no' }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    form.attending === 'no'
                      ? 'border-gray-400 bg-gray-100 text-gray-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl mb-2 block">-</span>
                  <span className="font-sans text-sm uppercase tracking-wider">
                    Regretfully Decline
                  </span>
                </button>
              </div>
            </div>

            {/* Conditional Fields for Attending */}
            {form.attending === 'yes' && (
              <div className="space-y-6 animate-fade-in-up">
                {/* Number of Guests */}
                <div>
                  <label htmlFor="guestCount" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                    Number of Guests (including yourself)
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>

                {/* Meal Preference */}
                <div>
                  <label htmlFor="mealPreference" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                    Meal Preference
                  </label>
                  <div className="relative">
                    <UtensilsCrossed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="mealPreference"
                      name="mealPreference"
                      value={form.mealPreference}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      <option value="">Select meal preference</option>
                      <option value="beef">Filet Mignon</option>
                      <option value="chicken">Herb-Roasted Chicken</option>
                      <option value="fish">Pan-Seared Salmon</option>
                      <option value="vegetarian">Vegetarian Option</option>
                    </select>
                  </div>
                </div>

                {/* Dietary Restrictions */}
                <div>
                  <label htmlFor="dietaryRestrictions" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                    Dietary Restrictions or Allergies
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={form.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                    placeholder="Please list any dietary requirements"
                  />
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-sans text-sm uppercase tracking-wider text-gray-600 mb-2">
                Message for the Couple (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-ivory-50 border border-blush-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Share your well wishes..."
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-sans text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !form.name || !form.email || !form.attending}
                className="px-12 py-4 bg-blush-500 hover:bg-blush-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-sans text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:disabled:shadow-none"
              >
                {isSubmitting ? 'Submitting...' : 'Send RSVP'}
              </button>
              <p className="font-sans text-xs text-gray-500 mt-4">
                * Required fields
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RSVPPage;
