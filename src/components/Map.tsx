
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const location = {
    name: "Shree Radhe Beauty Parlour",
    address: "JQRW+VGJ Sausar, Madhya Pradesh",
    phone: "+91 8435151178",
    email: "mrunalibhayde3@gmail.com",
    coordinates: { lat: 21.6417419, lng: 78.794872 } // Mumbai coordinates
  };

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(location.address);
    window.open(`https://maps.google.com/maps?q=${query}`, '_blank');
  };

  const openDirections = () => {
    const query = encodeURIComponent(location.address);
    window.open(`https://maps.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Interactive Map Container */}
      <Card className="overflow-hidden shadow-2xl border-0 bg-white">
        <div className="relative h-96 bg-gradient-to-br from-rose-100 via-pink-50 to-blush-100">
          <div 
            ref={mapContainer} 
            className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Simulated Map Interface */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="border border-gray-300 animate-pulse"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative animate-bounce-gentle">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full shadow-2xl flex items-center justify-center animate-glow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-rose-200 whitespace-nowrap">
                    <span className="text-sm font-semibold text-rose-600">Shree Radhe Beauty</span>
                  </div>
                </div>
              </div>

              {/* Floating Animation Elements */}
              <div className="floating-particles"></div>
              
              {/* Road Lines */}
              <div className="absolute top-0 left-1/4 w-1 h-full bg-gray-400 opacity-30 animate-pulse"></div>
              <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-400 opacity-30 animate-pulse"></div>
              <div className="absolute top-0 right-1/4 w-1 h-full bg-gray-400 opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Loading Animation */}
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100 transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto animate-pulse-soft">
                <MapPin className="w-8 h-8 text-white animate-bounce-gentle" />
              </div>
              <p className="font-inter text-gray-600 animate-fade-in">Loading beautiful map...</p>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button
              onClick={openDirections}
              size="sm"
              className="bg-white/90 text-rose-600 hover:bg-white border border-rose-200 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Directions
            </Button>
            <Button
              onClick={openInGoogleMaps}
              size="sm"
              variant="outline"
              className="bg-white/90 border-rose-200 text-rose-600 hover:bg-rose-50 shadow-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View on Maps
            </Button>
          </div>
        </div>
      </Card>

      {/* Location Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-0 bg-gradient-rose hover-lift animate-fade-in-left">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-playfair text-lg font-semibold text-gray-800">
                  Visit Us
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {location.address}
                </p>
                <Button 
                  onClick={openDirections}
                  variant="link" 
                  className="p-0 h-auto font-inter text-rose-600 hover:text-rose-700 hover:underline"
                >
                  Get Directions →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-blush hover-lift animate-fade-in-right">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center animate-float-slow">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-inter text-sm text-gray-500">Call Us</p>
                  <a 
                    href={`tel:${location.phone}`}
                    className="font-inter font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center animate-float">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-inter text-sm text-gray-500">Email Us</p>
                  <a 
                    href={`mailto:${location.email}`}
                    className="font-inter font-semibold text-gray-800 hover:text-rose-600 transition-colors duration-300"
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Map;
