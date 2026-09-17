import React, { useState } from "react";
import { eventConfig } from "../config/event";
import { motion } from "framer-motion";
import { GaneshaLineIcon, DiyaFlame, LotusMotif, TempleBellRow } from "./TempleMotifs";

export const TempleHero: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);
  const ganeshaSrc = imgError ? "/images/ganesha/ganesha.svg" : eventConfig.ganeshaImage;

  return (
    <section className="relative w-full min-h-[96vh] lg:min-h-screen flex flex-col justify-between items-center text-center px-4 pt-4 pb-8 overflow-hidden bg-gradient-to-b from-[#120604] via-[#260B06] to-[#1A0805]">
      {/* AUTHENTIC HANGING BELLS ACROSS FULL TOP VIEWPORT */}
      <TempleBellRow className="absolute top-0 inset-x-0 z-30 pointer-events-none px-2 sm:px-6 md:px-8 lg:px-10" height="h-48 sm:h-64 md:h-80 lg:h-96" />

      {/* Volumetric Temple Light & Saffron/Golden Aura across hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(230,90,22,0.25)_0%,_rgba(231,197,106,0.22)_35%,_rgba(184,134,50,0.12)_55%,_transparent_75%)] blur-3xl pointer-events-none" />

      {/* Floating Golden Dust Particles across hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`hero-p-${i}`}
            className="absolute rounded-full bg-[#E7C56A] shadow-[0_0_8px_#E7C56A]"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              left: `${(i * 9 + 4) % 96}%`,
              top: `${(i * 11 + 6) % 90}%`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.85, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* CENTERED DEVOTIONAL CONTENT CONTAINER */}
      <div className="w-full max-w-6xl relative z-20 flex flex-col items-center justify-between min-h-[92vh] py-2">
        {/* TOP HEADER: FIRST REVEALED PAGE INTERFACE */}
        <div className="w-full flex flex-col items-center pt-8 sm:pt-10">
          <GaneshaLineIcon size={36} className="text-[#E7C56A] drop-shadow-[0_0_12px_rgba(231,197,106,0.6)] mb-1.5" />

          <div className="flex items-center justify-center gap-2 text-xs mb-1.5">
            <span className="text-[#E65A16]">❖</span>
            <span className="font-devanagari text-sm sm:text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] tracking-widest drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              ॥ श्री गणेशाय नमः ॥
            </span>
            <span className="text-[#E65A16]">❖</span>
          </div>

          {/* ORGANIZATION NAME (PROMINENT & ENLARGED) */}
          <h2 className="font-yatra text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] my-1">
            {eventConfig.associationName}
          </h2>

          {/* MAIN FESTIVAL TITLE */}
          <h1 className="font-yatra text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#E65A16] leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] my-1">
            GANESH CHATURTHI
          </h1>

          {/* SACRED MANTRA */}
          <div className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-[#3A0F09] via-[#54110A] to-[#3A0F09] border border-[#D4AF5A]/60 text-[#E7C56A] font-devanagari font-bold text-xs sm:text-sm md:text-base tracking-widest shadow-md mt-1">
            {eventConfig.mantra}
          </div>
        </div>

        {/* CENTER: LARGE REAL GANESH IDOL (PURE TRANSPARENCY, NO WHITE BOX) */}
        <div className="relative my-auto w-full flex flex-col items-center justify-center py-2 sm:py-4">
          {/* Divine Golden Saffron Radial Halo behind idol */}
          <div className="absolute w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] md:w-[820px] md:h-[820px] lg:w-[1000px] lg:h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(245,124,40,0.38)_0%,_rgba(231,197,106,0.42)_35%,_rgba(184,134,50,0.18)_55%,_transparent_72%)] blur-3xl pointer-events-none" />

          {/* Real Ganesh Idol: Large, centered, object-fit contain, noticeably larger */}
          <div className="relative w-full flex items-center justify-center px-2 sm:px-4">
            <img
              src={ganeshaSrc}
              alt={`Lord Ganesha - ${eventConfig.associationName}`}
              onError={() => setImgError(true)}
              className="w-[94vw] max-w-[680px] md:w-[min(90vw,950px)] md:max-w-[950px] lg:w-[min(90vw,1050px)] lg:max-w-[1050px] h-auto object-contain filter drop-shadow-[0_24px_55px_rgba(231,197,106,0.75)] select-none transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Sacred Base Mantra & Temple Diyas */}
          <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl flex items-center justify-between px-4 sm:px-8 mt-2 sm:mt-3 z-30 pointer-events-none">
            <DiyaFlame size="sm" />
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-asar text-[#FFF1D0] tracking-widest uppercase">
              <LotusMotif size={16} className="text-[#E7C56A]" />
              <span className="font-devanagari font-bold text-[#E7C56A]">गणपति बप्पा मोरया</span>
              <LotusMotif size={16} className="text-[#E7C56A]" />
            </div>
            <DiyaFlame size="sm" />
          </div>
        </div>

        {/* BOTTOM: INVITATION WELCOME TEXT */}
        <div className="w-full flex flex-col items-center mt-2">
          <div className="max-w-md sm:max-w-xl px-4 text-center">
            <p className="font-asar text-xs sm:text-sm md:text-base text-[#FFF1D0]/90 leading-relaxed italic">
              "With the divine blessings of Lord Ganesha, we warmly invite you and your family to celebrate Ganesh Chaturthi with us."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleHero;
