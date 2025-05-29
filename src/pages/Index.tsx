
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Users, Award, Phone, ArrowRight, Sparkles, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Where Elegance Meets Tradition",
    "Bringing out the goddess in you",
    "Elegance. Confidence. Radiance.",
    "Glow like Radhe – graceful & divine"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Bridal Makeup",
      description: "Complete bridal transformation for your special day",
      icon: "💄",
      price: "Starting ₹7,000"
    },
    {
      title: "Hair Styling",
      description: "Professional styling for every occasion",
      icon: "💇‍♀️",
      price: "Starting ₹500"
    },
    {
      title: "Facial Treatments",
      description: "Rejuvenating skincare treatments",
      icon: "✨",
      price: "Starting ₹500"
    },
    {
      title: "Mehendi Art",
      description: "Beautiful henna designs for celebrations",
      icon: "🎨",
      price: "Starting ₹500"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Star, number: "4.9", label: "Rating" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Calendar, number: "1000+", label: "Appointments" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="floating-hearts"></div>
        <div className="floating-particles"></div>
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
                  Shree Radhe
                  <span className="block text-gradient animate-shimmer">Beauty Parlour</span>
                </h1>
                
                <div className="h-16 flex items-center">
                  <p className="font-dancing text-2xl md:text-3xl text-gray-600 animate-fade-in transition-all duration-500">
                    {taglines[currentTagline]}
                  </p>
                </div>
                
                <p className="font-inter text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in-up">
                  Experience divine beauty transformations with professional makeup artist 
                  <span className="font-semibold text-rose-600 animate-pulse-soft"> Sarita Bhayde</span>. 
                  Where traditional artistry meets modern elegance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
                <Link to="/booking">
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow">
                    Book Appointment
                    <Calendar className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <a href="tel:+919876543210">
                  <Button variant="outline" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                    Call Now
                    <Phone className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-float"></div>
                <div className="relative bg-white p-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=400&fit=crop&crop=face"
                    alt="Sarita Bhayde - Professional Makeup Artist"
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover-lift animate-scale-in"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-playfair text-3xl font-bold text-gray-800 mb-1 animate-fade-in-up">
                  {stat.number}
                </div>
                <div className="font-inter text-gray-600 text-sm animate-fade-in-up">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-rose relative overflow-hidden">
        <div className="floating-particles"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
              Our Signature Services
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              Discover our range of professional beauty services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="font-inter text-rose-600 font-semibold">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-glow">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 animate-fade-in-up">
                Meet <span className="text-gradient">Sarita Bhayde</span>
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed animate-fade-in-up">
                With over 5 years of experience in the beauty industry, Sarita Bhayde is a certified 
                professional makeup artist who believes in enhancing your natural beauty while honoring 
                traditional aesthetics.
              </p>
              <div className="space-y-3 animate-fade-in-up">
                {[
                  "Certified Professional Makeup Artist",
                  "Specialized in Bridal & Traditional Makeup",
                  "500+ Satisfied Clients",
                  "Expert in Hair Styling & Skincare"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse-soft"></div>
                    <span className="font-inter text-gray-600">{point}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-fade-in-up">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop"
                  alt="Sarita Bhayde at work"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-float">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-6 h-6 text-rose-500 fill-current animate-pulse-soft" />
                    <div>
                      <div className="font-playfair font-semibold text-gray-800">500+</div>
                      <div className="font-inter text-xs text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="floating-hearts"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Ready to Transform Your Look?
            </h2>
            <p className="font-inter text-xl mb-8 opacity-90 animate-fade-in-up">
              Book your appointment today and experience the magic of professional beauty transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link to="/booking">
                <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow">
                  Book Your Appointment
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  View Our Gallery
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
