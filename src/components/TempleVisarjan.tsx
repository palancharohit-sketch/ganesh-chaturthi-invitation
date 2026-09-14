import React from "react";
import { eventConfig } from "../config/event";
import { motion } from "framer-motion";
import { Calendar, Clock, Navigation, Waves } from "lucide-react";
import { CornerFlourish } from "./TempleMotifs";

export const TempleVisarjan: React.FC = () => {
  const directionsUrl =
    eventConfig.visarjanMapsUrl || "https://maps.google.com/?q=Tank+Bund+Hyderabad";

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center">
      <div className="w-full max-w-[400px] storyboard-card rounded-3xl p-6 relative overflow-hidden space-y-4">
        <CornerFlourish position="top-left" />
        <CornerFlourish position="top-right" />
        <CornerFlourish position="bottom-left" />
        <CornerFlourish position="bottom-right" />

        {/* Sunset Evening Gold Radial Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.2)_0%,_rgba(90,23,13,0.3)_45%,_transparent_75%)] blur-2xl pointer-events-none" />

        {/* Gentle Floating Petals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`visarjan-p-${i}`}
              className="absolute w-2.5 h-2.5 rounded-full rounded-tr-none bg-gradient-to-br from-[#E7C56A] to-[#B88632] rotate-45 opacity-60"
              style={{
                left: `${(i * 19 + 6) % 90}%`,
                top: "-10px",
              }}
              animate={{
                y: [0, 380],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                rotate: [45, 215],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center space-y-1 relative z-10 border-b border-[#D4AF5A]/25 pb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#4A1009]/80 border border-[#D4AF5A]/40 text-[#E7C56A] text-[10px] font-bold tracking-widest uppercase">
            <Waves className="w-3.5 h-3.5 text-[#E7C56A]" />
            <span>Grand Nimajjanam</span>
          </div>
          <h2 className="font-yatra text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow">
            VISARJAN
          </h2>
          <p className="font-asar text-xs text-[#F4E5C3]/90 italic">
            "With deep devotion and celebration, bidding farewell until next year"
          </p>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-2.5 relative z-10 text-xs">
          <div className="p-3 rounded-2xl bg-[#1A0805]/90 border border-[#D4AF5A]/25 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#F4E5C3]/70">
              <Calendar className="w-3.5 h-3.5 text-[#E7C56A]" />
              <span>Date</span>
            </div>
            <p className="font-yatra font-bold text-[#FFF1D0] text-sm">
              {eventConfig.visarjanDate}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-[#1A0805]/90 border border-[#D4AF5A]/25 space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#F4E5C3]/70">
              <Clock className="w-3.5 h-3.5 text-[#E7C56A]" />
              <span>Time</span>
            </div>
            <p className="font-yatra font-bold text-[#E7C56A] text-sm">
              {eventConfig.visarjanTime}
            </p>
          </div>
        </div>

        {/* Starting & Destination Journey Points */}
        <div className="p-4 rounded-2xl bg-[#1A0805]/90 border border-[#D4AF5A]/30 relative z-10 space-y-3 text-xs">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[#E7C56A] ring-4 ring-[#E7C56A]/20 shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase font-bold text-[#F4E5C3]/70 block">
                Starting Location
              </span>
              <span className="font-semibold text-[#FFF1D0] text-sm">
                {eventConfig.visarjanStartingLocation}
              </span>
            </div>
          </div>

          <div className="ml-1 w-0.5 h-4 border-l border-dashed border-[#D4AF5A]/40" />

          <div className="flex items-start gap-3">
            <div className="mt-1 w-2.5 h-2.5 rounded-full bg-[#D4AF5A] ring-4 ring-[#D4AF5A]/25 shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase font-bold text-[#F4E5C3]/70 block">
                Destination (Visarjan)
              </span>
              <span className="font-yatra font-bold text-[#E7C56A] text-base">
                {eventConfig.visarjanLocation}
              </span>
            </div>
          </div>
        </div>

        {/* Evening Diya & Mantra */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#E7C56A] relative z-10 pt-1">
          <span>❖</span>
          <span className="font-devanagari text-xs text-[#FFF1D0] tracking-wider">
            गणपति बप्पा मोरया
          </span>
          <span>❖</span>
        </div>

        {/* GET DIRECTIONS Button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-13 rounded-2xl bg-gradient-to-r from-[#D4AF5A] via-[#E7C56A] to-[#B88632] hover:brightness-110 text-[#3A1008] font-yatra font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 relative z-10 active:scale-[0.98] transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#3A1008] fill-[#3A1008]" />
          <span>GET DIRECTIONS</span>
        </a>
      </div>
    </section>
  );
};

export default TempleVisarjan;
