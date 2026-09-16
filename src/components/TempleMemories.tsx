import React, { useState } from "react";
import { eventConfig, type GalleryItem } from "../config/event";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrnateDivider } from "./TempleMotifs";

export const TempleMemories: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const items = eventConfig.galleryImages;

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + items.length) % items.length);
    }
  };

  return (
    <section className="px-4 py-12 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-xl md:max-w-4xl lg:max-w-5xl flex flex-col items-center">
        {/* Section Header: MEMORIES & PREVIOUS YEAR CELEBRATIONS */}
        <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E7C56A] font-bold block mb-1">
          MEMORIES
        </span>
        <h2 className="font-yatra text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-sm">
          PREVIOUS YEAR CELEBRATIONS
        </h2>

        <OrnateDivider className="my-2.5" />

        {/* Cinematic Temple Photo Collage: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 w-full pt-2">
          {items.map((item: GalleryItem, idx: number) => {
            const isFailed = failedImages[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF5A]/40 bg-[#1A0805] shadow-[0_8px_20px_rgba(0,0,0,0.85)] cursor-pointer transform transition-all duration-300 active:scale-95 hover:border-[#E7C56A]"
              >
                {!isFailed ? (
                  <img
                    src={item.image}
                    alt="Celebration Memory"
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full p-2 bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#120604] flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A0805] border border-[#D4AF5A]/50 flex items-center justify-center text-[#E7C56A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Touch-Friendly Lightbox: Pure Image Focus */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4"
          >
            <div className="w-full max-w-sm flex items-center justify-end z-10 pt-2">
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-transform"
                aria-label="Close image viewer"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="relative w-full max-w-sm my-auto aspect-[3/4] flex items-center justify-center">
              {!failedImages[items[selectedIdx].id] ? (
                <img
                  src={items[selectedIdx].image}
                  alt="Celebration Memory Fullscreen"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4AF5A]/60"
                />
              ) : (
                <div className="w-full h-64 rounded-2xl bg-[#1A0805] border border-[#D4AF5A]/40 flex items-center justify-center text-[#E7C56A]">
                  <Sparkles className="w-8 h-8" />
                </div>
              )}
            </div>

            {/* Bottom Arrows & Indicator */}
            <div className="w-full max-w-sm flex items-center justify-between z-10 pb-4 px-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-transform"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-1.5">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === selectedIdx ? "w-5 bg-[#E7C56A]" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-transform"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TempleMemories;
