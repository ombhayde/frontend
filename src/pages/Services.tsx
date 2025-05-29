
import { Clock, Star, Sparkles, Heart, Crown, Palette } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      category: "Bridal Services",
      icon: Crown,
      color: "from-rose-500 to-pink-500",
      services: [
        {
          name: "Complete Bridal Makeup",
          description: "Full bridal transformation including base, eyes, lips, and final touch-ups",
          duration: "3-4 hours",
          price: "₹7,000 - ₹10,000",
          features: ["HD Makeup", "Airbrush Available", "Trial Session", "Touch-up Kit"]
        },
        {
          name: "Bridal Hair Styling",
          description: "Traditional and contemporary bridal hairstyles with accessories",
          duration: "2-3 hours",
          price: "₹500 - ₹2,000",
          features: ["Hair Extensions", "Accessories Setup", "Multiple Styles", "Backup Pins"]
        },
        {
          name: "Mehendi Design",
          description: "Intricate henna designs for hands and feet",
          duration: "2-4 hours",
          price: "₹500 - ₹1,500",
          features: ["Custom Patterns", "Bridal Specials", "Both Hands & Feet", "Dark Stain"]
        }
      ]
    },
    {
      category: "Party & Events",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-500",
      services: [
        {
          name: "Party Makeup",
          description: "Glamorous makeup perfect for parties and special occasions",
          duration: "1.5-2 hours",
          price: "₹3,500 - ₹6,000",
          features: ["Long Lasting", "Photo Ready", "Custom Look", "Touch-up Tips"]
        },
        {
          name: "Cocktail Hair & Makeup",
          description: "Sophisticated styling for cocktail parties and events",
          duration: "2-2.5 hours",
          price: "₹5,000 - ₹8,000",
          features: ["Hair + Makeup", "Trendy Styles", "Long Lasting", "Multiple Looks"]
        },
        {
          name: "Engagement Makeup",
          description: "Perfect look for your engagement ceremony",
          duration: "2-3 hours",
          price: "₹6,000 - ₹10,000",
          features: ["Traditional/Modern", "Photo Shoot Ready", "Family Function", "Touch-ups"]
        }
      ]
    },
    {
      category: "Skincare & Treatments",
      icon: Heart,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "Facial Treatments",
          description: "Deep cleansing and rejuvenating facial treatments",
          duration: "1-1.5 hours",
          price: "₹1,500 - ₹4,000",
          features: ["Deep Cleansing", "Moisturizing", "Anti-Aging", "Skin Analysis"]
        },
        {
          name: "Pre-Bridal Skincare",
          description: "Complete skincare regimen for brides-to-be",
          duration: "1.5-2 hours",
          price: "₹3,000 - ₹6,000",
          features: ["Customized Plan", "Multiple Sessions", "Glow Treatment", "Skin Prep"]
        },
        {
          name: "Cleanup & Glow",
          description: "Quick cleanup for instant glow and freshness",
          duration: "45 mins - 1 hour",
          price: "₹1,200 - ₹2,500",
          features: ["Quick Refresh", "Instant Glow", "Skin Hydration", "Makeup Ready"]
        }
      ]
    },
    {
      category: "Hair Services",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Hair Styling",
          description: "Professional styling for all occasions",
          duration: "1-2 hours",
          price: "₹500 - ₹1,500",
          features: ["All Occasions", "Heat Styling", "Hair Products", "Style Consultation"]
        },
        {
          name: "Hair Treatment",
          description: "Nourishing treatments for healthy, shiny hair",
          duration: "1.5-2 hours",
          price: "₹500 - ₹1,500",
          features: ["Deep Conditioning", "Protein Treatment", "Damage Repair", "Scalp Care"]
        },
        {
          name: "Hair Wash & Blow Dry",
          description: "Professional hair wash and styling",
          duration: "45 mins - 1 hour",
          price: "₹500 - ₹1,500",
          features: ["Premium Shampoo", "Conditioning", "Professional Blow Dry", "Style Setting"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8">
              "Elegance. Confidence. Radiance."
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Discover our comprehensive range of beauty services designed to enhance your natural elegance
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-rose'}`}
        >
          <div className="container mx-auto px-4">
            {/* Category Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 animate-float`}>
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
                {category.category}
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Duration and Price */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="font-inter">{service.duration}</span>
                      </div>
                      <div className="font-playfair font-semibold text-lg text-rose-600">
                        {service.price}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-inter font-semibold text-gray-800 text-sm">Includes:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-rose-400 fill-current flex-shrink-0" />
                            <span className="font-inter text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Book Button */}
                    <div className="pt-4">
                      <Link to="/booking" className="block">
                        <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 hover:scale-105">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Package Deals Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Special Package Deals
            </h2>
            <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
              Save more with our carefully curated combination packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bridal Complete",
                services: ["Bridal Makeup", "Hair Styling", "Mehendi", "Pre-bridal Facial"],
                originalPrice: "₹20,000",
                packagePrice: "₹15,000",
                savings: "₹5,000"
              },
              {
                name: "Party Ready",
                services: ["Party Makeup", "Hair Styling", "Facial Cleanup"],
                originalPrice: "₹10,000",
                packagePrice: "₹7,000",
                savings: "₹3,00"
              },
              {
                name: "Glow Up Special",
                services: ["Facial Treatment", "Hair Treatment", "Cleanup & Glow"],
                originalPrice: "₹5,000",
                packagePrice: "₹3,500",
                savings: "₹1,500"
              }
            ].map((pkg, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="space-y-2 mb-6">
                    {pkg.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-inter text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm opacity-75 line-through">{pkg.originalPrice}</div>
                    <div className="font-playfair text-3xl font-bold">{pkg.packagePrice}</div>
                    <div className="text-sm text-yellow-400">Save {pkg.savings}</div>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-white text-rose-600 hover:bg-gray-100 py-3 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105">
                      Book Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              Need a Custom Package?
            </h2>
            <p className="font-inter text-gray-600 mb-8">
              Contact us for personalized service combinations and special pricing for multiple bookings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+918435151178">
                <Button variant="outline" className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
