
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 via-lavender-50 to-blush-50 border-t border-rose-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-dancing text-xl font-bold">SR</span>
              </div>
              <div>
                <h1 className="font-playfair text-xl font-bold text-gray-800">
                  Shree Radhe
                </h1>
                <p className="text-sm text-gray-600 -mt-1">Beauty Parlour</p>
              </div>
            </div>
            <p className="text-gray-600 font-inter text-sm leading-relaxed">
              Where elegance meets tradition. Professional makeup artistry by Sarita Bhayde, 
              bringing out the goddess in you with divine beauty transformations.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Book Appointment', href: '/booking' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-600 hover:text-rose-600 font-inter text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-800">Our Services</h3>
            <div className="space-y-2">
              {[
                'Bridal Makeup',
                'Hair Styling',
                'Facial Treatments',
                'Mehendi Art',
                'Party Makeup',
                'Skin Care',
              ].map((service) => (
                <div
                  key={service}
                  className="text-gray-600 font-inter text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-gray-800">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 font-inter text-sm leading-relaxed">
                  Behind Mahavir Battery,<br />
                  Vidhayak Niwas, Belgaon Naka,<br />
                  Sausar, MP 480106
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a
                  href="tel:+918435151178"
                  className="text-gray-600 hover:text-rose-600 font-inter text-sm transition-colors duration-300"
                >
                  +91 8435151178
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a
                  href="mailto:mrunalibhayde3@gmail.com"
                  className="text-gray-600 hover:text-rose-600 font-inter text-sm transition-colors duration-300"
                >
                  mrunalibhayde3@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-rose-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-600 font-inter text-sm text-center md:text-left">
              © 2024 Shree Radhe Beauty Parlour. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-600 font-inter text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              <span>for beautiful souls</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 font-dancing text-lg">
              "Bringing out the goddess in you"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
