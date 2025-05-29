import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const { name, email, phone, message } = formData;

    const res = await fetch('https://backend-ecis.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    toast({
      title: "Message Sent Successfully! ✨",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      subject: '', // optional, if used
    });
  } catch (error: any) {
    toast({
      title: "Error",
      description: error.message || "Something went wrong. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-luxury relative overflow-hidden">
        <div className="floating-particles"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8 animate-bounce-gentle">
              "We'd love to hear from you"
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed animate-fade-in-up">
              Have questions about our services? Want to book a consultation? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "+91 8435151178",
                link: "tel:+918435151178",
                description: "Call us anytime",
                gradient: "from-green-400 to-green-500"
              },
              {
                icon: Mail,
                title: "Email",
                info: "mrunalibhayde3@gmail.com",
                link: "mailto:mrunalibhayde3@gmail.com",
                description: "Send us a message",
                gradient: "from-blue-400 to-blue-500"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Behind Mahavir Battery, Begaon Naka, Sausar, Madhya Pradesh 480106",
                link: "https://www.google.com/maps/place/21%C2%B038'32.0%22N+78%C2%B047'46.6%22E/@21.6425323,78.7969873,17.68z/data=!4m4!3m3!8m2!3d21.642211!4d78.796288?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
                description: "Visit our parlour",
                gradient: "from-rose-400 to-pink-500"
              },
              {
                icon: Clock,
                title: "Hours",
                info: "9:00 AM - 8:00 PM",
                link: null,
                description: "Monday to Sunday",
                gradient: "from-purple-400 to-purple-500"
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover-lift text-center shadow-lg border-0 bg-gradient-rose animate-scale-in"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-inter text-gray-600 hover:text-rose-600 transition-colors duration-300 block mb-1"
                    >
                      {item.info}
                    </a>
                  ) : (
                    <div className="font-inter text-gray-600 mb-1">{item.info}</div>
                  )}
                  <p className="font-inter text-sm text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-blush">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="shadow-2xl border-0 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 pointer-events-none"></div>
                <CardHeader className="text-center pb-8 relative">
                  <CardTitle className="font-playfair text-3xl font-bold text-gray-800 animate-fade-in-up">
                    Send Us a Message
                  </CardTitle>
                  <p className="font-inter text-gray-600 mt-2 animate-fade-in-up">
                    We'll respond to your inquiry within 24 hours
                  </p>
                </CardHeader>
                
                <CardContent className="p-8 relative">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 animate-fade-in-up">
                        <Label htmlFor="name" className="font-inter font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 hover:border-rose-300"
                        />
                      </div>
                      
                      <div className="space-y-2 animate-fade-in-up">
                        <Label htmlFor="phone" className="font-inter font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 hover:border-rose-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 animate-fade-in-up">
                      <Label htmlFor="email" className="font-inter font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 hover:border-rose-300"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up">
                      <Label htmlFor="subject" className="font-inter font-medium text-gray-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What would you like to discuss?"
                        required
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 hover:border-rose-300"
                      />
                    </div>

                    <div className="space-y-2 animate-fade-in-up">
                      <Label htmlFor="message" className="font-inter font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your requirements, questions, or any special requests..."
                        rows={6}
                        required
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 hover:border-rose-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 rounded-full font-inter text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Map Component */}
              <div id="map">
                <Map />
              </div>

              {/* Social Media */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <CardContent className="p-8 text-center relative">
                  <h3 className="font-playfair text-2xl font-bold mb-4 animate-fade-in-up">
                    Follow Us
                  </h3>
                  <p className="font-inter mb-6 opacity-90 animate-fade-in-up">
                    Stay updated with our latest work and beauty tips
                  </p>
                  <div className="flex justify-center space-x-4 mb-6">
                    {[
                      { icon: Instagram, url: "https://instagram.com", delay: "0.1s" },
                      { icon: Facebook, url: "https://facebook.com", delay: "0.2s" },
                      { icon: MessageCircle, url: "https://wa.me/918435151178", delay: "0.3s" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-bounce-gentle"
                        style={{ animationDelay: social.delay }}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                  <div className="space-y-2 animate-fade-in-up">
                    <div className="font-inter">@shreeradhebeauty</div>
                    <div className="font-dancing text-lg">#ShreeRadheGlow</div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-6 text-center">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+918435151178"
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-inter font-semibold">Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918435151178"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-inter font-semibold">WhatsApp</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-3 weeks in advance, especially for bridal services and weekends."
              },
              {
                question: "Do you provide trials for bridal makeup?",
                answer: "Yes! We highly recommend a trial session 1-2 weeks before your wedding to finalize your look."
              },
              {
                question: "What products do you use?",
                answer: "We use premium, skin-friendly cosmetics from renowned brands to ensure the best results and skin safety."
              },
              {
                question: "Do you offer home services?",
                answer: "Yes, we provide home services for bridal and special occasions. Additional charges may apply based on location."
              },
              {
                question: "What's your cancellation policy?",
                answer: "We require 24 hours advance notice for cancellations. Deposit may be forfeited for same-day cancellations."
              },
              {
                question: "Do you provide hair and makeup together?",
                answer: "Absolutely! We offer complete styling packages including both hair and makeup services."
              }
            ].map((faq, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-gradient-rose hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
