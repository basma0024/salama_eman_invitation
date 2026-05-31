import { Heart, Clock, MapPin, Car, Calendar, Utensils, Music, Camera } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const DetailsPage = () => {
  const ceremonyDetails = {
    title: 'The Ceremony',
    time: '2:00 PM',
    venue: 'Rosewood Estate Gardens',
    address: '1234 Vineyard Way, Napa Valley, CA 94558',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.0!2d-122.2868!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE3JzUxLjAiTiAxMjLCsDE3JzEyLjUiVw!5e0!3m2!1sen!2sus!4v1234567890',
  };

  const receptionDetails = {
    title: 'The Reception',
    time: '5:00 PM',
    venue: 'Rosewood Grand Ballroom',
    address: '1234 Vineyard Way, Napa Valley, CA 94558',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.0!2d-122.2868!3d38.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE3JzUxLjAiTiAxMjLCsDE3JzEyLjUiVw!5e0!3m2!1sen!2sus!4v1234567890',
  };

  const schedule = [
    { time: '2:00 PM', event: 'Ceremony Begins', icon: Heart },
    { time: '3:00 PM', event: 'Cocktail Hour', icon: Utensils },
    { time: '4:30 PM', event: 'Guests Seated for Dinner', icon: Clock },
    { time: '5:00 PM', event: 'Reception & Dinner', icon: Utensils },
    { time: '7:00 PM', event: 'First Dance', icon: Music },
    { time: '7:30 PM', event: 'Open Dancing', icon: Music },
    { time: '9:30 PM', event: 'Cake Cutting', icon: Camera },
    { time: '11:00 PM', event: 'Farewell', icon: Heart },
  ];

  const accommodations = [
    {
      name: 'Rosewood Estate Inn',
      rate: '$189/night',
      code: 'EMMAJAMES2026',
    },
    {
      name: 'Napa Valley Hotel & Spa',
      rate: '$159/night',
      code: 'WEDDING26',
    },
  ];

  return (
    <div>
      <HeroSection
        title="Wedding Details"
        subtitle="Join us for a celebration of love at the beautiful Rosewood Estate in Napa Valley"
        date="October 15, 2026"
      />

      {/* Schedule Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
              The Day's Events
            </h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              We've planned a special day filled with love, laughter, and celebration. Here's what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-ivory-50 rounded-lg p-5 text-center hover:shadow-md transition-shadow duration-300 group"
                >
                  <Icon className="w-6 h-6 text-blush-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-serif text-lg text-gray-800">{item.time}</p>
                  <p className="font-sans text-sm text-gray-600">{item.event}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ceremony & Reception Details */}
      <section className="py-20 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ceremony */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blush-100 to-ivory-100 flex items-center justify-center">
                <Heart className="w-20 h-20 text-blush-300" fill="currentColor" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blush-500" />
                  <span className="font-sans text-lg text-gray-600">
                    {ceremonyDetails.time}
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-gray-800 mb-2">
                  {ceremonyDetails.title}
                </h3>
                <p className="font-sans text-gray-600 mb-2">
                  {ceremonyDetails.venue}
                </p>
                <p className="font-sans text-sm text-gray-500 mb-6">
                  {ceremonyDetails.address}
                </p>

                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src={ceremonyDetails.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ceremony Location"
                  />
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremonyDetails.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blush-500 hover:bg-blush-600 text-white font-sans text-sm uppercase tracking-wider rounded-full transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gold-100 to-ivory-100 flex items-center justify-center">
                <Calendar className="w-20 h-20 text-gold-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-600" />
                  <span className="font-sans text-lg text-gray-600">
                    {receptionDetails.time}
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-gray-800 mb-2">
                  {receptionDetails.title}
                </h3>
                <p className="font-sans text-gray-600 mb-2">
                  {receptionDetails.venue}
                </p>
                <p className="font-sans text-sm text-gray-500 mb-6">
                  {receptionDetails.address}
                </p>

                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src={receptionDetails.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Reception Location"
                  />
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(receptionDetails.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm uppercase tracking-wider rounded-full transition-colors duration-300"
                >
                  <Car className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
              Accommodations
            </h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              We've arranged special rates at nearby hotels for our guests. Use the provided booking codes when reserving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accommodations.map((hotel, index) => (
              <div
                key={index}
                className="bg-ivory-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-serif text-2xl text-gray-800 mb-3">
                  {hotel.name}
                </h3>
                <p className="font-sans text-xl text-blush-600 mb-3">
                  {hotel.rate}
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded-lg border border-blush-200">
                  <p className="font-sans text-xs uppercase tracking-wider text-gray-500 mb-1">
                    Booking Code
                  </p>
                  <p className="font-mono text-lg text-gray-800">{hotel.code}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-sans text-gray-500 text-sm">
              Please book by September 15, 2026 to secure the group rate
            </p>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 bg-blush-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
            Dress Code
          </h2>
          <p className="font-serif text-2xl text-blush-600 italic mb-6">
            Black Tie Optional
          </p>
          <p className="font-sans text-gray-600 max-w-xl mx-auto mb-8">
            We're planning an elegant evening celebration. Ladies may wear floor-length gowns or cocktail dresses, while gentlemen may wear tuxedos or dark suits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700">Floor-length Gowns</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700">Cocktail Dresses</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700">Tuxedos</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700">Dark Suits</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
