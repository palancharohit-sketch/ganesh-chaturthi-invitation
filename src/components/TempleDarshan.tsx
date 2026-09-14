import React, { useState } from "react";
import { eventConfig } from "../config/event";
import { motion, AnimatePresence } from "framer-motion";
import { DiyaFlame } from "./TempleMotifs";
import { Sparkles } from "lucide-react";

// EXACT UPLOADED REAL WHITE FLOWER ASSET
const WHITE_FLOWER_ASSET = "/images/decorations/white-flower.png";

export const TempleDarshan: React.FC = () => {
  const [imgError, setImgError] = useState<boolean>(false);
  const [isBlessingActive, setIsBlessingActive] = useState<boolean>(false);

  const ganeshaSrc = imgError ? "/images/ganesha/ganesha.svg" : eventConfig.ganeshaImage;

  const handleSeekBlessings = () => {
    if (isBlessingActive) return;
    setIsBlessingActive(true);
    setTimeout(() => {
      setIsBlessingActive(false);
    }, 4200);
  };

  return (
    <section className="relative px-3 py-8 w-full flex flex-col items-center text-center overflow-hidden">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        {/* Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block mb-1">
          GANESH DARSHAN
        </span>
        <p className="font-asar text-xs text-[#F4E5C3]/90 italic max-w-xs mb-3">
          "Come together in devotion and celebrate the divine presence of Lord Ganesha."
        </p>

        {/* LARGE GANESH IDOL STAGE */}
        <div className="relative w-full h-[400px] sm:h-[460px] flex flex-col items-center justify-center my-2">
          {/* Soft Golden Aura/Shadow behind Ganesh: gently glows and expands during scale-up, then fades smoothly */}
          <motion.div
            animate={
              isBlessingActive
                ? {
                    scale: [1, 1.22, 1.22, 1],
                    opacity: [0.3, 0.85, 0.85, 0.3],
                  }
                : { scale: 1, opacity: 0.3 }
            }
            transition={{
              duration: 1.8,
              times: [0, 0.4, 0.65, 1],
              ease: "easeInOut",
            }}
            className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.6)_0%,_rgba(212,175,90,0.3)_40%,_transparent_70%)] blur-2xl pointer-events-none"
          />

          {/* REAL GANESH IDOL: GENTLE DEVOTIONAL SCALE FROM 1.00 -> 1.06 -> HOLD -> 1.00 */}
          <motion.div
            animate={
              isBlessingActive
                ? {
                    scale: [1, 1.06, 1.06, 1],
                    filter: [
                      "drop-shadow(0 20px 40px rgba(231,197,106,0.5))",
                      "drop-shadow(0 25px 60px rgba(231,197,106,0.85))",
                      "drop-shadow(0 25px 60px rgba(231,197,106,0.85))",
                      "drop-shadow(0 20px 40px rgba(231,197,106,0.5))",
                    ],
                  }
                : {
                    scale: 1,
                    filter: "drop-shadow(0 20px 40px rgba(231,197,106,0.5))",
                  }
            }
            transition={{
              duration: 1.8,
              times: [0, 0.4, 0.65, 1],
              ease: "easeInOut",
            }}
            className="relative z-10 w-full h-full flex items-center justify-center p-1 origin-center"
          >
            <img
              src={ganeshaSrc}
              alt="Lord Ganesha Darshan"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain select-none"
            />
          </motion.div>

          {/* REAL WHITE FLOWER SHOWER (USING THE UPLOADED WHITE FLOWER IMAGE) */}
          <AnimatePresence>
            {isBlessingActive && (
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                {[...Array(24)].map((_, i) => {
                  // Size variation: 26px to 48px
                  const size = 26 + (i % 5) * 5;

                  // Clear face area: fall along left column (3% to 35%) and right column (65% to 95%)
                  const isLeft = i % 2 === 0;
                  const leftPos = isLeft
                    ? 3 + (i * 7) % 32   // Left side
                    : 65 + (i * 7) % 30; // Right side
                  const xSway = (isLeft ? 1 : -1) * (14 + (i % 4) * 6);
                  const delay = 0.07 * i;
                  const duration = 2.4 + (i % 3) * 0.4;
                  const rotationDelta = 140 + (i % 4) * 70;

                  return (
                    <motion.div
                      key={`white-flower-${i}`}
                      initial={{
                        y: -50,
                        x: 0,
                        opacity: 0,
                        scale: 0.75,
                        rotate: 0,
                      }}
                      animate={{
                        y: [ -50, 240, 420 ],
                        x: [ 0, xSway, xSway * 0.4 ],
                        opacity: [ 0, 1, 0.9, 0 ],
                        scale: [ 0.75, 1, 0.9 ],
                        rotate: [ 0, rotationDelta ],
                      }}
                      transition={{
                        duration: duration,
                        delay: delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute pointer-events-none select-none"
                      style={{
                        left: `${leftPos}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.65))",
                      }}
                    >
                      <img
                        src={WHITE_FLOWER_ASSET}
                        alt="Devotional White Flower"
                        className="w-full h-full object-contain filter contrast-105"
                      />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* SEEK BLESSINGS BUTTON */}
        <div className="pt-2 z-20">
          <motion.button
            onClick={handleSeekBlessings}
            whileTap={{ scale: 0.95 }}
            disabled={isBlessingActive}
            className="px-7 py-3 rounded-full border-2 border-[#D4AF5A] bg-gradient-to-r from-[#3A1008] via-[#4A1009] to-[#3A1008] text-[#FFF1D0] font-cinzel text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(18,6,4,0.9),0_0_15px_rgba(212,175,90,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#E7C56A] animate-pulse" />
            <span>{isBlessingActive ? "RECEIVING BLESSINGS..." : "SEEK BLESSINGS"}</span>
            <Sparkles className="w-4 h-4 text-[#E7C56A] animate-pulse" />
          </motion.button>
        </div>

        {/* Base Mantra with exact supplied Diya */}
        <div className="flex items-center justify-center gap-3 pt-4 text-xs text-[#E7C56A]">
          <DiyaFlame size="sm" />
          <span className="font-devanagari text-xs font-bold text-[#FFF1D0] tracking-wider">
            ॐ गं गणपतये नमः
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>
    </section>
  );
};

export default TempleDarshan;
