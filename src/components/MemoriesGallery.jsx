"use client";

import { useState, useEffect, useCallback } from "react";

const GALLERY = [
  "/assets/images/bin1.webp",
  "/assets/images/bin2.webp",
  "/assets/images/bin3.webp",
  "/assets/images/bin4.webp",
  "/assets/images/bin5.webp",
  "/assets/images/bin6.webp",
  "/assets/images/bin7.webp",
  "/assets/images/myyy.webp",
  "/assets/images/bin9.webp",
  "/assets/images/bin10.webp",
  "/assets/images/bin11.webp"
];

export default function MemoriesGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + GALLERY.length) % GALLERY.length);
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % GALLERY.length);
  }, [selectedIndex]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="bg-paper py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="font-dancing text-[#6d0208] text-[46px] leading-none">
          Kỷ niệm của chúng mình
        </div>
        <div className="w-16 h-px bg-[#6d0208]/40 mx-auto mt-3" />
      </div>

      {/* Top 3-image collage */}
      <div className="flex items-end gap-2 mb-2 h-[220px]">
        <div className="flex-1 h-[180px] cursor-pointer" onClick={() => setSelectedIndex(0)}>
          <img
            src={GALLERY[0]}
            alt="Kỷ niệm cưới"
            className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="flex-1 h-[220px] cursor-pointer" onClick={() => setSelectedIndex(1)}>
          <img
            src={GALLERY[1]}
            alt="Kỷ niệm cưới"
            className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="flex-1 h-[180px] cursor-pointer" onClick={() => setSelectedIndex(2)}>
          <img
            src={GALLERY[2]}
            alt="Kỷ niệm cưới"
            className="w-full h-full object-cover rounded hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      {/* 2-column grid of remaining photos */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {GALLERY.slice(3).map((src, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded cursor-pointer"
            onClick={() => setSelectedIndex(i + 3)}
          >
            <img
              src={src}
              alt="Kỷ niệm cưới"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium">
            {selectedIndex + 1} / {GALLERY.length}
          </div>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl w-14 h-14 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={GALLERY[selectedIndex]}
            alt="Kỷ niệm cưới"
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl w-14 h-14 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
