'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import NextImage from 'next/image';
import { YearData, lensConfig } from '@/lib/journey-data';

interface YearSectionProps {
  year: YearData;
}

const yearColors = {
  1: 'from-blue-600/20 to-blue-500/5',
  2: 'from-cyan-600/20 to-cyan-500/5',
  3: 'from-orange-600/20 to-orange-500/5',
  4: 'from-slate-700/20 to-slate-600/5',
};

const yearBorders = {
  1: 'border-blue-600/40',
  2: 'border-cyan-600/40',
  3: 'border-orange-600/40',
  4: 'border-slate-700/40',
};

export default function YearSection({ year }: YearSectionProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < year.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const selectedImage = selectedImageIndex !== null ? year.images[selectedImageIndex] : null;

  return (
    <div className={`bg-gradient-to-br ${yearColors[year.year as keyof typeof yearColors]} rounded-2xl p-8 border ${yearBorders[year.year as keyof typeof yearBorders]}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">{year.title}</h2>
        <p className="text-muted-foreground">{year.description}</p>
      </div>

      {/* Image Grid */}
      {year.images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {year.images.map((image, index) => {
            const lens = image.lens ? lensConfig[image.lens] : null;
            return (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 bg-muted overflow-hidden">
                  <NextImage
                    src={image.src}
                    alt={image.caption || 'Journey moment'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {lens && (
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <span>{lens.icon}</span>
                      <span>{lens.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Caption Area */}
                <div className="p-4">
                  {image.caption ? (
                    <p className="text-sm text-foreground line-clamp-2">{image.caption}</p>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">No caption</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground bg-white/50 rounded-xl">
          <p className="text-lg mb-2">No images yet for this year</p>
          <p className="text-sm">Add images to <code className="bg-muted px-2 py-1 rounded">public/images/year{year.year}/</code></p>
          <p className="text-sm mt-1">Then update <code className="bg-muted px-2 py-1 rounded">lib/journey-data.ts</code></p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {selectedImageIndex !== null && selectedImageIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          {selectedImageIndex !== null && selectedImageIndex < year.images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Image Content */}
          <div 
            className="max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[70vh] flex items-center justify-center">
              <NextImage
                src={selectedImage.src}
                alt={selectedImage.caption || 'Journey moment'}
                width={1200}
                height={800}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-center max-w-2xl">
              {selectedImage.lens && (
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white mb-2">
                  <span>{lensConfig[selectedImage.lens].icon}</span>
                  <span>{lensConfig[selectedImage.lens].title}</span>
                </div>
              )}
              {selectedImage.caption && (
                <p className="text-white/90 text-lg">{selectedImage.caption}</p>
              )}
              <p className="text-white/50 text-sm mt-2">
                {selectedImageIndex !== null && `${selectedImageIndex + 1} of ${year.images.length}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
