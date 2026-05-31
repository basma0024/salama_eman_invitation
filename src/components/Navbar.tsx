import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLang } from '../context/LangContext';
import LangToggle from './LangToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { tr, isRTL } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: tr.nav.home },
    { path: '/details', label: tr.nav.details },
    { path: '/rsvp', label: tr.nav.rsvp },
    { path: '/gallery', label: tr.nav.gallery },
    { path: '/story', label: tr.nav.story },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Heart
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-blush-500' : 'text-blush-400'
              } group-hover:text-blush-600`}
              fill="currentColor"
            />
            <span
              className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-gray-800' : 'text-gray-700'
              }`}
            >
              E & J
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-sans text-sm uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-blush-600'
                    : scrolled
                    ? 'text-gray-600 hover:text-blush-500'
                    : 'text-gray-700 hover:text-blush-400'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blush-400 rounded-full" />
                )}
              </Link>
            ))}
            <LangToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-600 hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg font-sans text-sm uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'bg-blush-100 text-blush-600'
                    : 'text-gray-600 hover:bg-blush-50 hover:text-blush-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2">
              <LangToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
