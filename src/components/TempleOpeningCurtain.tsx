import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventConfig } from "../config/event";
import { soundManager } from "../utils/sound";

interface TempleOpeningCurtainProps {
  onOpened: () => void;
  isOpened: boolean;
}

export const TempleOpeningCurtain: React.FC<TempleOpeningCurtainProps> = ({
  onOpened,
  isOpened,
}) => {
  const [isOpeningPhase, setIsOpeningPhase] = useState<boolean>(false);

  const handleOpen = () => {
    if (isOpeningPhase || isOpened) return;
    setIsOpeningPhase(true);

    // 1. Play chime and start Jai Ganesha music immediately on user interaction
    soundManager.playTempleBell();
    soundManager.startTempleAmbience(eventConfig.audioFile);

    // 2. Open doors very slowly and smoothly, naturally revealing Ganesh first page
    setTimeout(() => {
      onOpened();
    }, 3200);
  };

  if (isOpened) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-auto bg-transparent">
      {/* 3D CLOSED ORNATE TEMPLE DOORS (CONTAINS ABSOLUTELY NO TEXT, NO BELLS) */}
      <div className="relative w-full h-full flex perspective-[1200px] overflow-hidden">
        {/* LEFT DOOR */}
        <motion.div
          animate={
            isOpeningPhase
              ? { x: "-102%", rotateY: -95, opacity: 0.95 }
              : { x: "0%", rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 3.1, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: "left center" }}
          className="w-1/2 h-full bg-gradient-to-r from-[#1A0805] via-[#2A0C07] to-[#160604] border-r-2 border-[#D4AF5A]/80 shadow-[12px_0_45px_rgba(0,0,0,0.95)] relative flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Temple Dot Texture */}
          <div className="absolute inset-0 temple-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-4 bottom-4 right-3 w-px bg-gradient-to-b from-transparent via-[#D4AF5A]/60 to-transparent" />
          <div className="absolute top-4 right-3 w-4 h-4 border-t border-r border-[#D4AF5A]/70" />
          <div className="absolute bottom-4 right-3 w-4 h-4 border-b border-r border-[#D4AF5A]/70" />

          {/* Carved Door Bosses */}
          <div className="h-full flex flex-col justify-around py-16 px-4">
            {[0, 1, 2, 3].map((n) => (
              <div
                key={`ldoor-boss-${n}`}
                className="w-10 h-10 rounded-xl border border-[#D4AF5A]/40 bg-black/60 flex items-center justify-center shadow-inner ml-auto mr-3"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#B88632] via-[#E7C56A] to-[#B88632] shadow" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT DOOR */}
        <motion.div
          animate={
            isOpeningPhase
              ? { x: "102%", rotateY: 95, opacity: 0.95 }
              : { x: "0%", rotateY: 0, opacity: 1 }
          }
          transition={{ duration: 3.1, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: "right center" }}
          className="w-1/2 h-full bg-gradient-to-l from-[#1A0805] via-[#2A0C07] to-[#160604] border-l-2 border-[#D4AF5A]/80 shadow-[-12px_0_45px_rgba(0,0,0,0.95)] relative flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Temple Dot Texture */}
          <div className="absolute inset-0 temple-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-4 bottom-4 left-3 w-px bg-gradient-to-b from-transparent via-[#D4AF5A]/60 to-transparent" />
          <div className="absolute top-4 left-3 w-4 h-4 border-t border-l border-[#D4AF5A]/70" />
          <div className="absolute bottom-4 left-3 w-4 h-4 border-b border-l border-[#D4AF5A]/70" />

          {/* Carved Door Bosses */}
          <div className="h-full flex flex-col justify-around py-16 px-4">
            {[0, 1, 2, 3].map((n) => (
              <div
                key={`rdoor-boss-${n}`}
                className="w-10 h-10 rounded-xl border border-[#D4AF5A]/40 bg-black/60 flex items-center justify-center shadow-inner mr-auto ml-3"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#B88632] via-[#E7C56A] to-[#B88632] shadow" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* THE INTERACTIVE ELEMENT: CIRCULAR OM BUTTON CENTERED WITH TAP TO OPEN BELOW */}
        <AnimatePresence>
          {!isOpeningPhase && (
            <div className="absolute inset-0 z-45 flex flex-col items-center justify-center pointer-events-auto">
              <motion.button
                onClick={handleOpen}
                aria-label="Open Temple Doors"
                whileTap={{ scale: 0.94 }}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                transition={{ duration: 0.7 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer select-none group focus:outline-none"
              >
                {/* Soft Golden Aura Pulse */}
                <div className="absolute inset-0 rounded-full bg-[#E7C56A]/25 blur-xl animate-om-pulse pointer-events-none" />

                {/* Outer Concentric Antique Gold Ring */}
                <div className="absolute -inset-1.5 rounded-full border-2 border-[#E7C56A]/80 shadow-[0_0_25px_rgba(231,197,106,0.6)] animate-pulse pointer-events-none" />

                {/* Main Circular Gold Body */}
                <div className="relative w-full h-full rounded-full border-2 border-[#FFF1D0] bg-gradient-to-tr from-[#B88632] via-[#E7C56A] to-[#FFF1D0] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,90,0.6)] group-hover:brightness-110 transition-all">
                  {/* Inner Dark Maroon Sanctuary Medallion */}
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#120604] border border-[#D4AF5A]/60 flex items-center justify-center shadow-inner">
                    {/* Sacred OM Symbol */}
                    <span className="font-devanagari text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-[0_2px_8px_rgba(231,197,106,0.9)] select-none transform transition-transform group-hover:scale-105">
                      ॐ
                    </span>
                  </div>
                </div>
              </motion.button>

              {/* TAP TO OPEN DIRECTLY BELOW OM BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={handleOpen}
                className="mt-4 flex items-center justify-center cursor-pointer select-none"
              >
                <span className="px-4 py-1 rounded-full bg-[#1A0805]/85 border border-[#D4AF5A]/50 text-[#FFF1D0] font-cinzel text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.8)] backdrop-blur-sm hover:border-[#E7C56A] transition-all">
                  TAP TO OPEN
                </span>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TempleOpeningCurtain;
