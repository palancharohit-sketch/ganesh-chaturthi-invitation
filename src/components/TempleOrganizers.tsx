import React, { useState, useEffect, useRef } from "react";
import { eventConfig, type OrganizerItem } from "../config/event";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { OrnateDivider } from "./TempleMotifs";

export const TempleOrganizers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<number | null>(null);

  const organizers = eventConfig.organizers;
  const total = organizers.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Auto rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = window.setInterval(() => {
      handleNext();
    }, 4500);
    return () => {
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isAutoPlaying]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const getCardProps = (index: number) => {
    let diff = (index - currentIndex) % total;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      return {
        x: "0%",
        scale: 1,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1) blur(0px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1) {
      return {
        x: "-64%",
        scale: 0.82,
        rotateY: 22,
        zIndex: 15,
        opacity: 0.65,
        filter: "brightness(0.6) blur(0.8px)",
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      return {
        x: "64%",
        scale: 0.82,
        rotateY: -22,
        zIndex: 15,
        opacity: 0.65,
        filter: "brightness(0.6) blur(0.8px)",
        pointerEvents: "auto" as const,
      };
    } else {
      return {
        x: diff < 0 ? "-130%" : "130%",
        scale: 0.65,
        rotateY: diff < 0 ? 35 : -35,
        zIndex: 5,
        opacity: 0,
        filter: "brightness(0.4) blur(2px)",
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section className="relative w-full px-2 py-8 overflow-hidden flex flex-col items-center">
      {/* HEADER: ORGANIZERS ONLY */}
      <div className="text-center relative z-20 flex flex-col items-center mb-4">
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block mb-1">
          ORGANIZERS
        </span>
        <OrnateDivider className="my-1 max-w-[280px]" />
      </div>

      {/* 3D CAROUSEL STAGE */}
      <div
        className="relative w-full max-w-[420px] h-[370px] sm:h-[410px] flex items-center justify-center perspective-[1100px] select-none"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={() => setIsAutoPlaying(false)}
        onTouchEnd={() => setIsAutoPlaying(true)}
      >
        {organizers.map((organizer: OrganizerItem, index: number) => {
          const cardProps = getCardProps(index);
          const isCenter = index === currentIndex;
          const isFailed = failedImages[index] || !organizer.image;

          return (
            <motion.div
              key={organizer.name}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 35) {
                  handlePrev();
                } else if (info.offset.x < -35) {
                  handleNext();
                }
              }}
              animate={{
                x: cardProps.x,
                scale: cardProps.scale,
                rotateY: cardProps.rotateY,
                zIndex: cardProps.zIndex,
                opacity: cardProps.opacity,
                filter: cardProps.filter,
              }}
              transition={{
                duration: 0.55,
                ease: [0.25, 1, 0.5, 1],
              }}
              onClick={() => {
                if (!isCenter) setCurrentIndex(index);
              }}
              className="absolute w-[76vw] max-w-[280px] h-[350px] sm:h-[390px] rounded-3xl cursor-grab active:cursor-grabbing overflow-hidden flex flex-col justify-end"
              style={{
                pointerEvents: cardProps.pointerEvents,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card Container & Outer Glow */}
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-300 ${
                  isCenter
                    ? "border-2 border-[#E7C56A] shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(231,197,106,0.3)] bg-[#1A0805]"
                    : "border border-[#B88632]/50 shadow-md bg-[#120604]"
                }`}
              />

              {/* ORGANIZER PHOTO: Fills the card naturally without ornate overlay borders */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {!isFailed ? (
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    loading="lazy"
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#120604] flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#B88632] via-[#E7C56A] to-[#FFF1D0] flex items-center justify-center shadow-md mb-2">
                      <User className="w-10 h-10 text-[#3A1008]" />
                    </div>
                  </div>
                )}
              </div>

              {/* BOTTOM NAMEPLATE: Name appears ONLY here on active card */}
              <div className="relative z-20 w-full p-3 bg-gradient-to-t from-[#120604] via-[#120604]/90 to-transparent pt-8 text-center">
                <div className="rounded-xl bg-[#260B06]/85 border border-[#D4AF5A]/50 py-1.5 px-3 shadow-md">
                  <h3 className="font-yatra text-sm sm:text-base font-bold text-[#FFF1D0] tracking-wide leading-tight drop-shadow-sm">
                    {organizer.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Previous Button (Left Arrow) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Organizer"
          className="absolute left-1 sm:left-2 z-40 w-10 h-10 rounded-full bg-[#1A0805]/90 border border-[#E7C56A]/70 text-[#E7C56A] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.8)] active:scale-90 transition-all hover:bg-[#3A1008]"
        >
          <ChevronLeft className="w-5 h-5 text-[#E7C56A]" />
        </button>

        {/* Next Button (Right Arrow) */}
        <button
          onClick={handleNext}
          aria-label="Next Organizer"
          className="absolute right-1 sm:right-2 z-40 w-10 h-10 rounded-full bg-[#1A0805]/90 border border-[#E7C56A]/70 text-[#E7C56A] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.8)] active:scale-90 transition-all hover:bg-[#3A1008]"
        >
          <ChevronRight className="w-5 h-5 text-[#E7C56A]" />
        </button>
      </div>

      {/* GOLD PAGINATION DOTS (NO extra name list below!) */}
      <div className="flex items-center justify-center gap-1.5 mt-4 mb-2 relative z-20">
        {organizers.map((_, dotIdx) => (
          <button
            key={`dot-${dotIdx}`}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to organizer ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              dotIdx === currentIndex
                ? "w-4 h-1.5 bg-[#E7C56A] shadow-[0_0_8px_#E7C56A]"
                : "w-1.5 h-1.5 bg-[#B88632]/40 hover:bg-[#B88632]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TempleOrganizers;
