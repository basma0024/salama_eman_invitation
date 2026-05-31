import { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos: Photo[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Couple walking together',
      caption: 'Our first walk together as a couple',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1692462/pexels-photo-1692462.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Romantic sunset',
      caption: 'The sunset on our first vacation',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1559152/pexels-photo-1559152.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Couple at coffee shop',
      caption: 'Coffee dates are our favorite',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement ring',
      caption: 'The moment she said yes!',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Couple in flowers',
      caption: 'Spring in full bloom',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1454167/pexels-photo-1454167.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beach sunset',
      caption: 'Sunset at Malibu Beach',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/1545897/pexels-photo-1545897.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Romantic dinner',
      caption: 'Our anniversary dinner',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/2889493/pexels-photo-2889493.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Couple dancing',
      caption: 'Dancing under the stars',
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/1687616/pexels-photo-1687616.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mountain adventure',
      caption: 'Our hiking adventures',
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/1034441/pexels-photo-1034441.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Engagement photo',
      caption: 'Official engagement photoshoot',
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Couple portrait',
      caption: 'Our first professional photo',
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Autumn walk',
      caption: 'Fall colors and warm hearts',
    },
  ];

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <div>
      <HeroSection
        title="Our Gallery"
        subtitle="Moments captured through our journey together"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Text */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-px bg-blush-300" />
              <Heart className="w-5 h-5 text-blush-400" fill="currentColor" />
              <span className="w-12 h-px bg-blush-300" />
            </div>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
              Every picture tells a story of our love. Click any photo to view it in full.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(photo, index)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="font-sans text-sm px-4">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-blush-300 transition-colors duration-300 z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-blush-300 transition-colors duration-300 z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-blush-300 transition-colors duration-300 z-10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Photo */}
          <div
            className="max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedPhoto.caption && (
              <p className="font-sans text-white text-center mt-4 text-sm">
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
