
import { Award, Users, Calendar, Star, Heart, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Certified Professional",
      description: "Advanced certification in professional makeup artistry"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by brides and beauty enthusiasts across the city"
    },
    {
      icon: Calendar,
      title: "5+ Years Experience",
      description: "Half a decade of perfecting the art of beauty transformation"
    },
    {
      icon: Star,
      title: "4.9 Star Rating",
      description: "Consistently rated excellent by our valued clients"
    }
  ];

  const expertise = [
    {
      area: "Bridal Makeup",
      description: "Specializing in traditional and contemporary bridal looks that enhance natural beauty",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop"
    },
    {
      area: "Hair Styling",
      description: "Expert in creating stunning hairstyles for weddings, parties, and special occasions",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=200&fit=crop"
    },
    {
      area: "Skincare Treatments",
      description: "Professional facial treatments and skincare consultation for glowing skin",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=300&h=200&fit=crop"
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
              About <span className="text-gradient">Sarita Bhayde</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8">
              "Bringing out the goddess in you"
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Where passion meets profession, and every client becomes a masterpiece
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="font-playfair text-3xl font-bold text-gray-800">
                  My Journey in Beauty
                </h2>
                <p className="font-inter text-gray-600 leading-relaxed">
                  Welcome to Shree Radhe Beauty Parlour, where I, Sarita Bhayde, have been 
                  transforming dreams into reality for over 5 years. My journey began with a 
                  simple belief - every woman deserves to feel like a goddess.
                </p>
                <p className="font-inter text-gray-600 leading-relaxed">
                  With professional training from renowned beauty academies and continuous 
                  learning in the latest trends and techniques, I specialize in creating looks 
                  that perfectly blend traditional elegance with contemporary style.
                </p>
                <p className="font-inter text-gray-600 leading-relaxed">
                  What sets me apart is my personalized approach. I believe that makeup should 
                  enhance your natural beauty, not mask it. Every client receives a customized 
                  consultation to understand their preferences, skin type, and the occasion.
                </p>
              </div>

              <div className="bg-gradient-rose p-6 rounded-2xl">
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-rose-500 mr-2" />
                  My Philosophy
                </h3>
                <p className="font-inter text-gray-600 italic">
                  "Beauty is not about being perfect; it's about being confident in your own skin. 
                  My role is to enhance that confidence and let your inner radiance shine through."
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0d5a0c90cb6?w=500&h=600&fit=crop"
                  alt="Sarita Bhayde - Professional Makeup Artist"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="font-playfair text-2xl font-bold text-gray-800">5+</div>
                    <div className="font-inter text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-blush">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Achievements & Milestones
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and trust earned through dedication and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Areas of Expertise
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized skills honed through years of practice and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="group hover-lift bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.area}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                    {item.area}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-8">
              Why Choose Shree Radhe Beauty Parlour?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Personalized Care</h3>
                <p className="font-inter opacity-90">
                  Every client receives individual attention and customized beauty solutions
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Premium Products</h3>
                <p className="font-inter opacity-90">
                  Using only the finest, skin-friendly cosmetics and beauty products
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Proven Excellence</h3>
                <p className="font-inter opacity-90">
                  Consistently delivering exceptional results that exceed expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
