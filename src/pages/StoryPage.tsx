import { Heart } from 'lucide-react';
import HeroSection from '../components/HeroSection';

interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  description: string;
  image: string;
  side: 'left' | 'right';
}

const StoryPage = () => {
  const timeline: TimelineEvent[] = [
    {
      year: '2019',
      month: 'March',
      title: 'First Meeting',
      description: 'We met at a mutual friend\'s birthday party. Emma was laughing at James\' terrible jokes, and he was completely smitten from that first conversation. Little did we know this chance encounter would change our lives forever.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'left',
    },
    {
      year: '2019',
      month: 'May',
      title: 'First Date',
      description: 'After weeks of texting and stolen glances, James finally built up the courage to ask Emma out. We went to a small Italian restaurant in the city and talked for hours over pasta and wine. The chemistry was undeniable.',
      image: 'https://images.pexels.com/photos/1559152/pexels-photo-1559152.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'right',
    },
    {
      year: '2019',
      month: 'August',
      title: 'Making It Official',
      description: 'On a warm summer evening, watching the sunset at the beach, we decided to make our relationship official. We both knew this was something special - something worth holding onto.',
      image: 'https://images.pexels.com/photos/1454167/pexels-photo-1454167.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'left',
    },
    {
      year: '2020',
      month: 'February',
      title: 'First Trip Together',
      description: 'Our first vacation as a couple - a romantic getaway to Napa Valley. We fell in love with the rolling vineyards, the wine, and the peaceful atmosphere. This trip planted the seed for our future wedding location.',
      image: 'https://images.pexels.com/photos/1687616/pexels-photo-1687616.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'right',
    },
    {
      year: '2021',
      month: 'December',
      title: 'Moving In Together',
      description: 'After two years of dating, we took the next big step and moved into our first apartment together. Creating a home filled with love, laughter, and way too many plants became our greatest adventure.',
      image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'left',
    },
    {
      year: '2023',
      month: 'October',
      title: 'The Proposal',
      description: 'On a beautiful autumn evening, surrounded by fall colors and fairy lights at our favorite spot, James got down on one knee. Through happy tears, Emma said yes! The moment was perfect, just like our love story.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'right',
    },
    {
      year: '2026',
      month: 'October',
      title: 'Our Forever Begins',
      description: 'And now, we\'re ready to start our forever together. We can\'t wait to celebrate this next chapter with all of you - our friends and family who have supported us throughout our journey.',
      image: 'https://images.pexels.com/photos/1034441/pexels-photo-1034441.jpeg?auto=compress&cs=tinysrgb&w=400',
      side: 'left',
    },
  ];

  return (
    <div>
      <HeroSection
        title="Our Love Story"
        subtitle="A timeline of moments that brought us here"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-12 md:w-20 h-px bg-blush-300" />
              <Heart className="w-6 h-6 text-blush-400" fill="currentColor" />
              <span className="w-12 md:w-20 h-px bg-blush-300" />
            </div>
            <p className="font-serif text-xl text-gray-700 italic max-w-3xl mx-auto">
              "Every great love story is beautiful, but ours is my favorite."
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blush-200 via-blush-300 to-blush-400 hidden md:block" />

            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  event.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    event.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-ivory-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${event.side === 'left' ? 'md:justify-end' : ''}`}>
                      <span className="font-sans text-sm text-blush-600 font-semibold">
                        {event.month}
                      </span>
                      <span className="font-sans text-sm text-gray-500">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
                      {event.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-blush-400 rounded-full items-center justify-center z-10">
                  <Heart className="w-5 h-5 text-blush-500" fill="currentColor" />
                </div>

                {/* Image */}
                <div
                  className={`w-full md:w-1/2 mt-6 md:mt-0 ${
                    event.side === 'left' ? 'md:pl-12' : 'md:pr-12'
                  }`}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Outro */}
          <div className="text-center mt-20 pt-12 border-t border-blush-100">
            <Heart className="w-10 h-10 text-blush-400 mx-auto mb-6 animate-pulse" fill="currentColor" />
            <p className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
              The Best Is Yet To Come
            </p>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              Our journey is just beginning, and we're so grateful to have you along for the ride. Thank you for being part of our story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
