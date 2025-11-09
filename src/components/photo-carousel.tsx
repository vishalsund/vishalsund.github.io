// app/PhotoCarousel.tsx (or wherever you keep components)

"use client"; 

import { useState, useEffect, CSSProperties } from "react"; // ADD CSSProperties
import Image from "next/image";

interface PhotoCarouselProps {
  images: string[];
}

// Define the style object for the mask
const fadeMaskStyle: CSSProperties = {
  // Standard property
  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
  // WebKit prefix for broader browser support
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
};


export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="relative w-full flex justify-center items-center mb-12 h-64 md:h-80">
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center mb-12">
      
      {/* EDIT: Applied the inline fadeMaskStyle here.
        Note that 'overflow-hidden' is still required for the image sliding.
      */}
      <div 
        className="relative w-full max-w-4xl h-64 md:h-80 overflow-hidden"
        style={{ ...fadeMaskStyle }} // Spread the defined mask styles
      >
        <div className="flex justify-center items-center relative h-full">
          {images.map((src, idx) => {
            const numImages = images.length;
            let offset = idx - currentIndex;

            if (offset > numImages / 2) {
              offset -= numImages;
            } else if (offset < -numImages / 2) {
              offset += numImages;
            }

            const isActive = offset === 0;

            return (
              <div
                key={idx}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  // Spacing increased to 80%
                  transform: `translateX(${offset * 80}%) scale(${ 
                    isActive ? 1 : 0.7
                  })`,
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <Image
                  src={src}
                  alt={`Photo ${idx + 1}`}
                  width={320}
                  height={320}
                  className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  priority={isActive}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Buttons remain outside the main container for easy clicking */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-800 text-white rounded-full p-2 hover:bg-dark-700 transition z-30"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-800 text-white rounded-full p-2 hover:bg-dark-700 transition z-30"
      >
        ▶
      </button>
    </div>
  );
}