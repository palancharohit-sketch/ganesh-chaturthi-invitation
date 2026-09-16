import React from "react";
import { eventConfig } from "../config/event";
import { motion } from "framer-motion";
import { LotusMotif } from "./TempleMotifs";

export const TempleFooter: React.FC = () => {
  return (
    <footer className="relative w-full px-4 pt-8 pb-14 overflow-hidden flex flex-col items-center text-center bg-gradient-to-b from-transparent via-[#260B06] to-[#120604]">
      {/* Background Volumetric Halo */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.25)_0%,_rgba(184,134,50,0.12)_45%,_transparent_75%)] blur-2xl pointer-events-none" />

      {/* Floating Golden Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`footer-p-${i}`}
            className="absolute rounded-full bg-[#E7C56A] shadow-[0_0_8px_#E7C56A]"
            style={{
              width: "2.5px",
              height: "2.5px",
              left: `${(i * 14 + 5) % 92}%`,
              bottom: `${(i * 12 + 8) % 75}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{
              duration: 3.5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Clean Lotus Motif */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-4">
        <LotusMotif size={24} className="text-[#E7C56A] drop-shadow-sm mb-1.5" />
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF5A]/60 to-transparent" />
      </div>

      {/* Sacred Devotional Mantra: गणपति बप्पा मोरया */}
      <div className="relative z-10 space-y-1 mb-2">
        <h2 className="font-devanagari text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          गणपति बप्पा मोरया
        </h2>
      </div>

      {/* English Devotional Blessing Message */}
      <div className="relative z-10 max-w-md sm:max-w-xl px-4 mb-6">
        <p className="font-asar text-xs sm:text-sm md:text-base text-[#FFF1D0]/95 leading-relaxed italic">
          "May Lord Ganesha's divine blessings always be with you and your family."
        </p>
      </div>

      {/* Association Watermark */}
      <div className="relative z-10 pt-4 border-t border-[#D4AF5A]/25 w-full max-w-sm sm:max-w-md">
        <p className="font-yatra text-xs sm:text-sm font-bold text-[#E7C56A]">
          {eventConfig.associationName}
        </p>
        <p className="font-asar text-[10px] sm:text-xs text-[#F4E5C3]/70 mt-0.5">
          Ganesh Utsav • {eventConfig.year}
        </p>
      </div>
    </footer>
  );
};

export default TempleFooter;
