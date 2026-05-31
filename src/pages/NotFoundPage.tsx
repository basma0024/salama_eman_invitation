import { Link } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blush-50 via-ivory-50 to-white px-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-16 h-px bg-blush-300" />
          <Heart className="w-8 h-8 text-blush-400" fill="currentColor" />
          <span className="w-16 h-px bg-blush-300" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-blush-400 mb-4">
          404
        </h1>

        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
          Page Not Found
        </h2>

        <p className="font-sans text-gray-600 max-w-md mx-auto mb-8">
          Looks like this page took a wrong turn on the way to the wedding. Let's get you back on the right path.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blush-500 hover:bg-blush-600 text-white font-sans text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="mt-12">
          <p className="font-serif text-lg text-blush-600 italic">
            Emma & James
          </p>
          <p className="font-sans text-sm text-gray-500">
            October 15, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
