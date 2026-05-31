import { Heart } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  date?: string;
  showDivider?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  date,
  showDivider = true,
}) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-floral py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blush-50/50 to-ivory-50/80" />

      <div className="relative z-10 text-center px-4">
        {showDivider && (
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <span className="w-12 md:w-20 h-px bg-blush-300" />
            <Heart className="w-5 h-5 text-blush-400" fill="currentColor" />
            <span className="w-12 md:w-20 h-px bg-blush-300" />
          </div>
        )}

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4 animate-fade-in-up">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}

        {date && (
          <div className="mt-6 animate-fade-in-up animation-delay-300">
            <p className="font-serif text-xl md:text-2xl text-blush-600 italic">
              {date}
            </p>
          </div>
        )}
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
