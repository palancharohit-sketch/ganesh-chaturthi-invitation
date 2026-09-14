import React, { useState } from "react";
import { eventConfig, type GalleryItem } from "../config/event";
import { X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CornerFlourish, DiyaFlame, OrnateDivider } from "./TempleMotifs";

export const TempleGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const items = eventConfig.galleryImages.slice(0, 6);

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
    <section className="px-4 py-8 w-full flex flex-col items-center">
      {/* Storyboard Screen 11 Container */}
      <div className="w-full max-w-[400px] storyboard-card rounded-3xl p-5 sm:p-6 relative overflow-hidden space-y-4">
        <CornerFlourish position="top-left" />
        <CornerFlourish position="top-right" />
        <CornerFlourish position="bottom-left" />
        <CornerFlourish position="bottom-right" />

        {/* Section Header */}
        <div className="text-center space-y-1">
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
            ❖ GALLERY ❖
          </span>
        </div>

        <OrnateDivider className="my-1" />

        {/* 6-Photo Grid (2 Columns x 3 Rows - Exact Storyboard Screen 11) */}
        <div className="grid grid-cols-2 gap-2.5">
          {items.map((item: GalleryItem, idx: number) => {
            const isFailed = failedImages[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4AF5A]/45 bg-[#1A0805] shadow-[0_6px_16px_rgba(0,0,0,0.7)] cursor-pointer transform transition-all duration-300 active:scale-95 hover:border-[#E7C56A]"
              >
                {!isFailed ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Elegant Devotional Placeholder */
                  <div className="w-full h-full p-2 bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#120604] flex flex-col items-center justify-center text-center space-y-1">
                    <div className="w-8 h-8 rounded-full bg-[#1A0805] border border-[#D4AF5A]/50 flex items-center justify-center text-[#E7C56A]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-yatra text-[11px] font-bold text-[#FFF1D0] line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Button: View All Photos (Exact Screen 11 Pill Button) */}
        <button
          onClick={() => setSelectedIdx(0)}
          className="w-full py-3 rounded-full bg-[#1A0805] border border-[#D4AF5A]/50 text-[#E7C56A] font-cinzel text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#260B06] active:scale-95 transition-all shadow"
        >
          <ImageIcon className="w-4 h-4 text-[#E7C56A]" />
          <span>View All Photos</span>
        </button>

        {/* Bottom Diyas */}
        <div className="flex items-center justify-between pt-1 border-t border-[#D4AF5A]/25 px-2">
          <DiyaFlame size="sm" />
          <span className="text-xs text-[#E7C56A] font-devanagari font-bold">
            गणपति बप्पा मोरया
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>

      {/* Fullscreen Touch-Friendly Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4"
          >
            <div className="w-full max-w-sm flex items-center justify-between z-10 pt-2">
              <span className="font-yatra text-sm font-bold text-[#FFF1D0] truncate max-w-[240px]">
                {items[selectedIdx].title}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-transform"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="relative w-full max-w-sm my-auto aspect-[3/4] flex items-center justify-center">
              {!failedImages[items[selectedIdx].id] ? (
                <img
                  src={items[selectedIdx].image}
                  alt={items[selectedIdx].title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4AF5A]/60"
                />
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#120604] border-2 border-[#D4AF5A]/60 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#1A0805] border border-[#E7C56A]/60 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-[#E7C56A]" />
                  </div>
                  <h3 className="font-yatra text-lg font-bold text-[#FFF1D0]">
                    {items[selectedIdx].title}
                  </h3>
                </div>
              )}
            </div>

            <div className="w-full flex items-center justify-between max-w-sm pb-4">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1 py-2 px-4 rounded-xl bg-white/10 text-[#E7C56A] font-semibold text-xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <span className="text-xs text-[#F4E5C3]/70 font-medium">
                {selectedIdx + 1} / {items.length}
              </span>

              <button
                onClick={handleNext}
                className="flex items-center gap-1 py-2 px-4 rounded-xl bg-white/10 text-[#E7C56A] font-semibold text-xs active:scale-95"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TempleGallery;
