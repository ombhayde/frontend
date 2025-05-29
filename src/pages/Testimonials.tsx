
import { Star, Quote, Instagram, Facebook } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      occasion: "Wedding",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b743?w=150&h=150&fit=crop&crop=face",
      review: "Sarita made my wedding day absolutely magical! Her attention to detail and understanding of what I wanted was incredible. I felt like a princess and received so many compliments. The makeup lasted the entire day and looked flawless in all photos.",
      date: "December 2024",
      service: "Bridal Makeup & Hair"
    },
    {
      id: 2,
      name: "Ananya Patel",
      occasion: "Engagement",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      review: "I was nervous about my engagement ceremony, but Sarita's warm personality and expertise put me at ease. She created the perfect balance of traditional and modern look. My fiancé and family were amazed by the transformation!",
      date: "November 2024",
      service: "Engagement Makeup"
    },
    {
      id: 3,
      name: "Kavya Reddy",
      occasion: "Party",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      review: "Amazing experience! Sarita understood exactly what I wanted for my birthday party. The makeup was stunning and photographed beautifully. I felt confident and glamorous the entire evening. Highly recommend!",
      date: "October 2024",
      service: "Party Makeup"
    },
    {
      id: 4,
      name: "Meera Joshi",
      occasion: "Reception",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=150&h=150&fit=crop&crop=face",
      review: "Sarita is truly an artist! She transformed me for my reception and I couldn't believe how beautiful I looked. Her use of colors and techniques is outstanding. The hair styling was also perfect and stayed intact all night.",
      date: "September 2024",
      service: "Reception Look"
    },
    {
      id: 5,
      name: "Riya Singh",
      occasion: "Mehendi Ceremony",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      review: "The mehendi design was absolutely gorgeous! Sarita's intricate patterns and attention to detail are unmatched. She completed both my hands and feet beautifully. The color came out so dark and rich. Everyone was asking for her contact!",
      date: "August 2024",
      service: "Mehendi Art"
    },
    {
      id: 6,
      name: "Divya Gupta",
      occasion: "Anniversary",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      review: "For our 5th anniversary celebration, I wanted to look special. Sarita created an elegant and sophisticated look that made me feel beautiful. Her professionalism and skill are top-notch. Will definitely book again!",
      date: "July 2024",
      service: "Special Occasion Makeup"
    },
    {
      id: 7,
      name: "Sneha Agarwal",
      occasion: "Family Function",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      review: "Sarita did makeup for my entire family for a wedding function. Each of us got a customized look that suited our style and age. She managed everything so professionally and we all looked stunning. Truly talented!",
      date: "June 2024",
      service: "Group Makeup"
    },
    {
      id: 8,
      name: "Pooja Kapoor",
      occasion: "Photoshoot",
      rating: 5,
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=150&h=150&fit=crop&crop=face",
      review: "Had a professional photoshoot and Sarita's makeup was perfect for the camera. She knows exactly how to make makeup look natural yet striking in photos. The photographer was impressed too! Excellent work.",
      date: "May 2024",
      service: "Photoshoot Makeup"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8">
              "Words of love from our beautiful clients"
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(5)}
              </div>
              <span className="font-playfair text-2xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
              <span className="font-inter text-gray-600">({totalReviews} reviews)</span>
            </div>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Real experiences from real clients who trusted us with their special moments
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="font-playfair text-4xl font-bold text-rose-600 mb-2">500+</div>
              <div className="font-inter text-gray-600">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="font-playfair text-4xl font-bold text-rose-600 mb-2">4.9</div>
              <div className="font-inter text-gray-600">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-playfair text-4xl font-bold text-rose-600 mb-2">100%</div>
              <div className="font-inter text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="font-playfair text-4xl font-bold text-rose-600 mb-2">50+</div>
              <div className="font-inter text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group hover-lift bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="font-inter text-gray-600 text-center leading-relaxed mb-6 italic">
                    "{testimonial.review}"
                  </p>

                  {/* Client Info */}
                  <div className="text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 object-cover shadow-lg"
                    />
                    <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="font-inter text-sm text-rose-600 mb-1">
                      {testimonial.service}
                    </div>
                    <div className="font-inter text-xs text-gray-500">
                      {testimonial.occasion} • {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-rose-50 to-pink-50">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Quote className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                </div>
              </div>

              <blockquote className="font-inter text-xl text-gray-700 leading-relaxed mb-8 italic">
                "Sarita is not just a makeup artist, she's a magician! She made me look like the best version of myself on my wedding day. Her attention to detail, professionalism, and warm personality made the entire experience so comfortable and enjoyable. I can't recommend her enough!"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
                  alt="Featured Client"
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-playfair text-lg font-semibold text-gray-800">
                    Nisha Malhotra
                  </div>
                  <div className="font-inter text-sm text-rose-600">
                    Bridal Client • December 2024
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-blush">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
              Join Our Happy Clients
            </h2>
            <p className="font-inter text-gray-600 mb-8">
              Follow us on social media to see more transformations and read reviews from our amazing clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-inter font-semibold hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@shreeradhebeauty</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-inter font-semibold hover:scale-105 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
                <span>Shree Radhe Beauty</span>
              </a>
            </div>
            <Link to="/booking">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Book Your Transformation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Share Your Experience
            </h2>
            <p className="font-inter text-xl mb-8 opacity-90">
              Had a beautiful experience with us? We'd love to hear from you and share your story!
            </p>
            <div className="space-y-4">
              <p className="font-inter opacity-90">
                Leave us a review on Google or share your photos on social media with
              </p>
              <div className="font-dancing text-2xl">#ShreeRadheGlow #SaritaBhaydeArtistry</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
