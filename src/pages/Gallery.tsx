
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram, Facebook } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal Makeup' },
    { id: 'party', name: 'Party Look' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'hair', name: 'Hair Styling' },
    { id: 'mehendi', name: 'Mehendi' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'bridal',
      before: 'https://images.unsplash.com/photo-1614083563100-b5f11c67ec8a?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
      title: 'Traditional Bridal Makeup',
      description: 'Complete bridal transformation with traditional elements'
    },
    {
      id: 2,
      category: 'party',
      before: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop',
      title: 'Glamorous Party Look',
      description: 'Bold and beautiful party makeup with smokey eyes'
    },
    {
      id: 3,
      category: 'hair',
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop',
      title: 'Elegant Hair Styling',
      description: 'Sophisticated updo perfect for special occasions'
    },
    {
      id: 4,
      category: 'bridal',
      before: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=500&fit=crop',
      title: 'Modern Bridal Look',
      description: 'Contemporary bridal makeup with subtle glamour'
    },
    {
      id: 5,
      category: 'traditional',
      before: 'https://images.unsplash.com/photo-1594736797933-d0d5a0c90cb6?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
      title: 'Traditional Ceremony Look',
      description: 'Classic traditional makeup for religious ceremonies'
    },
    {
      id: 6,
      category: 'mehendi',
      before: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1609205803535-6af9e152fdc0?w=400&h=500&fit=crop',
      title: 'Intricate Mehendi Design',
      description: 'Beautiful henna patterns for bridal ceremonies'
    },
    {
      id: 7,
      category: 'party',
      before: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop',
      title: 'Evening Party Glam',
      description: 'Sophisticated evening makeup with gold accents'
    },
    {
      id: 8,
      category: 'bridal',
      before: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop',
      title: 'Destination Wedding Look',
      description: 'Perfect makeup for outdoor wedding ceremonies'
    },
    {
      id: 9,
      category: 'hair',
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
      title: 'Bridal Hair Artistry',
      description: 'Elaborate bridal hairstyle with floral accessories'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Beauty <span className="text-gradient">Gallery</span>
            </h1>
            <p className="font-dancing text-2xl text-gray-600 mb-8">
              "Glow like Radhe – graceful & divine"
            </p>
            <p className="font-inter text-lg text-gray-600 leading-relaxed">
              Witness the magical transformations and artistic excellence in every creation
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-rose-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600'
                    : 'border-rose-300 text-rose-600 hover:bg-rose-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Before/After Images */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="flex h-full">
                      <div className="w-1/2 relative overflow-hidden">
                        <img
                          src={image.before}
                          alt={`${image.title} - Before`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-inter">
                          Before
                        </div>
                      </div>
                      <div className="w-1/2 relative overflow-hidden">
                        <img
                          src={image.after}
                          alt={`${image.title} - After`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 right-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-inter">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
              Share Your Transformation
            </h2>
            <p className="font-inter text-gray-600 mb-8">
              Tag us on social media to be featured in our gallery! Follow us for daily inspiration and beauty tips.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-inter font-semibold hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@shreeradhebeauty</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-inter font-semibold hover:scale-105 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
                <span>Shree Radhe Beauty</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors duration-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-400 transition-colors duration-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Content */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-96 sm:h-[500px]">
                <div className="flex h-full">
                  <div className="w-1/2 relative">
                    <img
                      src={filteredImages[selectedImage].before}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded font-inter">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <img
                      src={filteredImages[selectedImage].after}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded font-inter">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="font-inter text-gray-600">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
