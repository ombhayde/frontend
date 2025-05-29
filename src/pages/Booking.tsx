
import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const services = [
    { value: 'bridal-complete', label: 'Complete Bridal Makeup - ₹15,000+', duration: '3-4 hours' },
    { value: 'bridal-hair', label: 'Bridal Hair Styling - ₹8,000+', duration: '2-3 hours' },
    { value: 'party-makeup', label: 'Party Makeup - ₹3,500+', duration: '1.5-2 hours' },
    { value: 'engagement', label: 'Engagement Makeup - ₹6,000+', duration: '2-3 hours' },
    { value: 'mehendi', label: 'Mehendi Design - ₹2,000+', duration: '2-4 hours' },
    { value: 'facial', label: 'Facial Treatment - ₹1,500+', duration: '1-1.5 hours' },
    { value: 'hair-styling', label: 'Hair Styling - ₹2,500+', duration: '1-2 hours' },
    { value: 'package-bridal', label: 'Bridal Complete Package - ₹28,000', duration: 'Full day' },
    { value: 'package-party', label: 'Party Ready Package - ₹9,500', duration: '4-5 hours' },
    { value: 'consultation', label: 'Free Consultation', duration: '30 mins' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }));
};


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:5000/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error('Notification failed');

    toast({
      title: "Booking Request Submitted! ✨",
      description: "We’ll contact you within 2 hours to confirm your appointment.",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Book Your <span className="text-gradient">Appointment</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8">
              "Your transformation journey begins here"
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Schedule your personalized beauty session with professional makeup artist Sarita Bhayde
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-gradient-rose">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-playfair text-3xl font-bold text-gray-800">
                    Book Your Session
                  </CardTitle>
                  <p className="font-inter text-gray-600 mt-2">
                    Fill in your details and we'll confirm your appointment
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-inter font-medium text-gray-700 flex items-center">
                          <User className="w-4 h-4 mr-2 text-rose-500" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-inter font-medium text-gray-700 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-rose-500" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-inter font-medium text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-rose-500" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label className="font-inter font-medium text-gray-700">
                        Select Service *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-rose-200 focus:border-rose-500 focus:ring-rose-500">
                          <SelectValue placeholder="Choose your service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50">
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <div>
                                <div className="font-medium">{service.label}</div>
                                <div className="text-sm text-gray-500">Duration: {service.duration}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="font-inter font-medium text-gray-700 flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-rose-500" />
                          Preferred Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          min={today}
                          required
                          className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-inter font-medium text-gray-700 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-rose-500" />
                          Preferred Time *
                        </Label>
                        <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                          <SelectTrigger className="border-rose-200 focus:border-rose-500 focus:ring-rose-500">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-white z-50">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-inter font-medium text-gray-700 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-rose-500" />
                        Additional Notes
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Any special requests or questions..."
                        rows={4}
                        className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.phone || !formData.service || !formData.date || !formData.time}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 rounded-full font-inter text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>Book My Appointment</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-lg border-0 bg-white">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl font-bold text-gray-800">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="font-inter font-medium text-gray-800">Phone</div>
                      <a href="tel:+919876543210" className="font-inter text-gray-600 hover:text-rose-600 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-rose-500" />
                    <div>
                      <div className="font-inter font-medium text-gray-800">Email</div>
                      <a href="mailto:info@shreeradhebeauty.com" className="font-inter text-gray-600 hover:text-rose-600 transition-colors">
                        info@shreeradhebeauty.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-inter text-sm text-gray-600">
                      We'll confirm your appointment within 2 hours during business hours (9 AM - 8 PM).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Notes */}
              <Card className="shadow-lg border-0 bg-gradient-blush">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl font-bold text-gray-800">
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm text-gray-600">
                      Bridal trials are recommended 1-2 weeks before the wedding
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm text-gray-600">
                      Please arrive with a clean face for makeup services
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm text-gray-600">
                      Advance booking is recommended, especially for weekends
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-inter text-sm text-gray-600">
                      Cancellation policy: 24 hours advance notice required
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-bold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="font-inter mb-6 opacity-90">
                    Call us directly for urgent bookings or questions
                  </p>
                  <a href="tel:+919876543210">
                    <Button className="w-full bg-white text-rose-600 hover:bg-gray-100 py-3 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
