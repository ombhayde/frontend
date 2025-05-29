
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-effect shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-dancing text-xl font-bold">SR</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-gray-800">
                Shree Radhe
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Beauty Parlour</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-inter text-sm font-medium transition-all duration-300 relative",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-rose-500 after:to-pink-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  location.pathname === item.href
                    ? "text-rose-600 after:scale-x-100"
                    : "text-gray-700 hover:text-rose-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918435151178"
              className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-inter text-sm">Call Now</span>
            </a>
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/booking"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full font-inter text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block font-inter text-base font-medium transition-colors duration-300",
                    location.pathname === item.href
                      ? "text-rose-600"
                      : "text-gray-700 hover:text-rose-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-gray-200" />
              <div className="flex items-center justify-between">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-inter text-sm">+91 8435151178</span>
                </a>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center py-3 rounded-full font-inter text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
