import React from "react";
import { eventConfig } from "../config/event";
import { Calendar, Clock, MapPin, ArrowRight, Waves } from "lucide-react";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleGaneshVisarjan: React.FC = () => {
  const handleMapClick = () => {
    window.open(eventConfig.visarjanMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        {/* Section Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          GANESH VISARJAN
        </span>

        <OrnateDivider className="my-1" />

        {/* One Elegant Visarjan Information Container with Thin Golden Glowing Stroke */}
        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.22)] p-5 flex flex-col items-center overflow-hidden">
          {/* Subtle Inner Gold Inset Frame */}
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          {/* Corner Flourishes */}
          <CornerFlourish position="top-left" size={18} />
          <CornerFlourish position="top-right" size={18} />
          <CornerFlourish position="bottom-left" size={18} />
          <CornerFlourish position="bottom-right" size={18} />

          {/* Title */}
          <h2 className="relative z-10 font-yatra text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-sm mb-1">
            Ganesh Visarjan
          </h2>

          {/* Date & Time Row with Subtle Gold Icons */}
          <div className="relative z-10 flex items-center justify-center gap-6 py-2.5 my-2 border-y border-[#D4AF5A]/35 w-full">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E7C56A] shrink-0" />
              <div className="text-left">
                <span className="font-cinzel text-[8.5px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                  Date
                </span>
                <span className="font-yatra text-sm font-bold text-[#FFF1D0]">
                  {eventConfig.visarjanDate}
                </span>
              </div>
            </div>

            <div className="w-px h-7 bg-gradient-to-b from-transparent via-[#D4AF5A]/45 to-transparent" />

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E7C56A] shrink-0" />
              <div className="text-left">
                <span className="font-cinzel text-[8.5px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                  Time
                </span>
                <span className="font-yatra text-sm font-bold text-[#E7C56A]">
                  {eventConfig.visarjanTime}
                </span>
              </div>
            </div>
          </div>

          {/* Starting From & Destination Journey Details */}
          <div className="relative z-10 w-full py-3 space-y-3 text-xs border-b border-[#D4AF5A]/25">
            {/* Starting Location */}
            <div className="flex items-start gap-3 text-left">
              <div className="mt-0.5 p-1 rounded-full bg-[#E7C56A]/15 border border-[#E7C56A]/50 text-[#E7C56A] shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#E7C56A]" />
              </div>
              <div>
                <span className="font-cinzel text-[9px] uppercase font-bold text-[#F4E5C3]/70 block tracking-wider">
                  Starting From
                </span>
                <p className="font-yatra font-bold text-[#FFF1D0] text-sm leading-snug">
                  St. Mark School
                </p>
                <p className="font-asar text-xs text-[#F4E5C3]/80">
                  Nehru Nagar, Kachiguda
                </p>
              </div>
            </div>

            {/* Subtle Journey Connector Line */}
            <div className="ml-3 w-0.5 h-3 border-l border-dashed border-[#D4AF5A]/40" />

            {/* Destination */}
            <div className="flex items-start gap-3 text-left">
              <div className="mt-0.5 p-1 rounded-full bg-[#E7C56A]/25 border border-[#E7C56A] text-[#E7C56A] shadow-[0_0_8px_#E7C56A]/30 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#E7C56A]" />
              </div>
              <div>
                <span className="font-cinzel text-[9px] uppercase font-bold text-[#F4E5C3]/70 block tracking-wider">
                  Destination
                </span>
                <p className="font-yatra font-bold text-[#E7C56A] text-base leading-snug">
                  Tank Bund, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* Destination Map Preview with Direct Tap to Google Maps */}
          <div
            onClick={handleMapClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleMapClick();
            }}
            className="relative z-10 w-full mt-3 pt-3 rounded-2xl bg-[#1A0805]/90 border border-[#D4AF5A]/40 p-4 cursor-pointer transition-all duration-300 hover:border-[#E7C56A] active:scale-[0.98] group flex flex-col items-center select-none"
          >
            {/* Soft Water Waves Glow & Pin */}
            <div className="w-10 h-10 rounded-full bg-[#E7C56A]/15 border border-[#E7C56A] flex items-center justify-center animate-bounce shadow-[0_0_12px_#E7C56A] mb-2">
              <Waves className="w-5 h-5 text-[#E7C56A]" />
            </div>

            <span className="font-yatra text-sm font-bold text-[#FFF1D0] group-hover:text-[#E7C56A] transition-colors">
              Tank Bund, Hyderabad
            </span>

            <p className="font-cinzel text-[10px] uppercase tracking-wider text-[#E7C56A] mt-1 font-semibold flex items-center gap-1">
              <span>View Location on Google Maps</span>
              <ArrowRight className="w-3 h-3 text-[#E7C56A] group-hover:translate-x-0.5 transition-transform" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleGaneshVisarjan;
