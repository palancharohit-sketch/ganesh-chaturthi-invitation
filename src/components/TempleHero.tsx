import React, { useState } from "react";
import { eventConfig } from "../config/event";
import { motion } from "framer-motion";
import { GaneshaLineIcon, DiyaFlame, LotusMotif, TempleBellRow } from "./TempleMotifs";

export const TempleHero: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);
  const ganeshaSrc = imgError ? "/images/ganesha/ganesha.svg" : eventConfig.ganeshaImage;

  return (
    <section className="relative w-full min-h-[96vh] flex flex-col justify-between items-center text-center px-3 pt-4 pb-8 overflow-hidden bg-gradient-to-b from-[#120604] via-[#260B06] to-[#1A0805]">
      {/* AUTHENTIC HANGING BELLS AT THE TOP OF THE FIRST REVEAL PAGE */}
      <TempleBellRow className="absolute top-0 inset-x-0 z-30 pointer-events-none" height="h-24 sm:h-30" />

      {/* Volumetric Temple Light & Golden Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.3)_0%,_rgba(184,134,50,0.12)_50%,_transparent_75%)] blur-2xl pointer-events-none" />

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`hero-p-${i}`}
            className="absolute rounded-full bg-[#E7C56A] shadow-[0_0_8px_#E7C56A]"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              left: `${(i * 11 + 6) % 92}%`,
              top: `${(i * 13 + 8) % 88}%`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      {/* TOP HEADER: FIRST REVEALED PAGE INTERFACE */}
      <div className="w-full relative z-20 flex flex-col items-center pt-8 sm:pt-10">
        <GaneshaLineIcon size={32} className="text-[#E7C56A] drop-shadow-[0_0_10px_rgba(231,197,106,0.6)] mb-1" />

        <div className="flex items-center justify-center gap-2 text-xs mb-1">
          <span className="text-[#E7C56A]">❖</span>
          <span className="font-devanagari text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] tracking-widest drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="text-[#E7C56A]">❖</span>
        </div>

        <h1 className="font-yatra text-2xl sm:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          GANESH CHATURTHI
        </h1>
        <p className="font-cinzel text-xs font-bold uppercase tracking-[0.3em] text-[#E7C56A] mt-0.5">
          INVITATION
        </p>

        <div className="mt-1 space-y-0.5">
          <h2 className="font-yatra text-sm sm:text-base font-bold tracking-wide text-[#FFF1D0] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            SRI SAI YOUTH ASSOCIATION
          </h2>
          <div className="inline-block px-3 py-0.5 rounded-full bg-[#3A1008] border border-[#D4AF5A]/50 text-[#E7C56A] font-bold text-[10px] tracking-widest shadow">
            2026
          </div>
        </div>
      </div>

      {/* CENTER: LARGE REAL GANESH IDOL (VISUALLY DOMINANT, NO GENERIC BOX) */}
      <div className="relative z-20 my-auto w-full flex flex-col items-center justify-center py-2">
        {/* Divine Golden Radial Halo behind idol */}
        <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.38)_0%,_rgba(184,134,50,0.18)_45%,_transparent_72%)] blur-xl pointer-events-none" />

        {/* Real Ganesh Idol: Large, completely uncropped, object-fit contain */}
        <div className="relative w-full max-w-[360px] h-[400px] sm:h-[480px] flex items-center justify-center p-1">
          <img
            src={ganeshaSrc}
            alt="Lord Ganesha"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain filter drop-shadow-[0_22px_45px_rgba(231,197,106,0.65)] select-none transition-transform duration-700 hover:scale-102"
          />
        </div>

        {/* Sacred Base Mantra & Subtle Temple Diyas */}
        <div className="w-full max-w-[340px] flex items-center justify-between px-3 -mt-2 z-30 pointer-events-none">
          <DiyaFlame size="sm" />
          <div className="flex items-center gap-1.5 text-[11px] font-asar text-[#FFF1D0] tracking-widest uppercase">
            <LotusMotif size={14} className="text-[#E7C56A]" />
            <span className="font-devanagari font-bold text-[#E7C56A]">॥ श्री गणेशाय नमः ॥</span>
            <LotusMotif size={14} className="text-[#E7C56A]" />
          </div>
          <DiyaFlame size="sm" />
        </div>
      </div>

      {/* BOTTOM: INVITATION WELCOME TEXT */}
      <div className="w-full relative z-20 flex flex-col items-center mt-2">
        <div className="max-w-xs px-3 text-center">
          <p className="font-asar text-xs sm:text-sm text-[#FFF1D0]/90 leading-relaxed italic">
            "With devotion and joy, we warmly invite you and your family to join us in celebrating Lord Ganesha's arrival."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TempleHero;
