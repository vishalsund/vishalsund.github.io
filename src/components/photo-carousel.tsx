"use client"; // <-- This tells Next.js this is a Client Component

import { useState, useEffect } from "react";

export default function PhotoCarousel() {
  const images = [
    "content\photography\DSCN1962.JPG",
    "content\photography\DSCN1962.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full flex justify-center mb-12">
      <div className="relative w-full max-w-4xl h-64 md:h-80 overflow-hidden">
        <div className="flex justify-center items-center relative h-full">
          {images.map((src, idx) => {
            const offset = idx - currentIndex;
            const isActive = offset === 0;

            return (
              <div
                key={idx}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${offset * 60}%) scale(${isActive ? 1 : 0.7})`,
                  zIndex: isActive ? 20 : 10 - Math.abs(offset),
                  opacity: isActive ? 1 : 0.5,
                }}
              >
                <img
                  src={src}
                  alt={`Photo ${idx + 1}`}
                  className="w-64 md:w-80 h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-dark-800 text-white rounded-full p-2 hover:bg-dark-700 transition"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-dark-800 text-white rounded-full p-2 hover:bg-dark-700 transition"
      >
        ▶
      </button>
    </div>
  );
}
