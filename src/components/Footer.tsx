import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blush-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-blush-700" />
            <Heart className="w-6 h-6 text-blush-400" fill="currentColor" />
            <span className="w-16 h-px bg-blush-700" />
          </div>

          {/* Names */}
          <h3 className="font-serif text-3xl md:text-4xl mb-2">
            Emma & James
          </h3>
          <p className="font-sans text-blush-300 text-sm tracking-wider uppercase mb-8">
            October 15, 2026
          </p>

          {/* Contact & Social */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="mailto:emma.james.wedding@email.com"
              className="flex items-center gap-2 text-blush-300 hover:text-blush-100 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">emma.james.wedding@email.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="#"
              className="p-3 bg-blush-800 rounded-full hover:bg-blush-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Hashtag */}
          <p className="font-serif text-lg text-blush-300 italic mb-8">
            #EmmaAndJamesForever
          </p>

          {/* Copyright */}
          <div className="pt-8 border-t border-blush-800">
            <p className="text-blush-400 text-xs tracking-wider">
              Made with love for Emma & James
            </p>
            <p className="text-blush-500 text-xs mt-2">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
