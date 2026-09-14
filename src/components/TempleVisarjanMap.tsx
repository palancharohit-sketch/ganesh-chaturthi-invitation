import React from "react";
import { eventConfig } from "../config/event";
import { MapPin, Waves, Calendar, Clock, ArrowRight } from "lucide-react";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleVisarjanMap: React.FC = () => {
  const handleMapClick = () => {
    window.open(eventConfig.visarjanMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        {/* Section Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          VISARJAN MAP
        </span>

        <OrnateDivider className="my-1" />

        {/* CLICKABLE VISARJAN MAP PREVIEW (DIRECT TAP OPENS GOOGLE MAPS FOR TANK BUND) */}
        <div
          onClick={handleMapClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleMapClick();
          }}
          className="w-full relative rounded-3xl overflow-hidden border border-[#D4AF5A]/60 bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] p-5 cursor-pointer shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] transition-all duration-300 hover:border-[#E7C56A] active:scale-98 group"
        >
          {/* Inner gold dashed stroke */}
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          {/* Corner Flourishes */}
          <CornerFlourish position="top-left" size={18} />
          <CornerFlourish position="top-right" size={18} />
          <CornerFlourish position="bottom-left" size={18} />
          <CornerFlourish position="bottom-right" size={18} />

          {/* Water Waves Watermark / Texture */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF5A_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

          {/* Bouncing Gold Pin with Waves */}
          <div className="relative z-10 flex flex-col items-center pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E7C56A]/20 border border-[#E7C56A] flex items-center justify-center animate-bounce shadow-[0_0_15px_#E7C56A]">
              <Waves className="w-6 h-6 text-[#E7C56A]" />
            </div>

            <span className="mt-3 inline-block px-3.5 py-0.5 rounded-full bg-[#260B06] border border-[#D4AF5A]/50 text-[#FFF1D0] font-yatra text-xs font-semibold shadow">
              {eventConfig.visarjanLocation}
            </span>
          </div>

          {/* Route details: From St. Mark School To Tank Bund */}
          <div className="relative z-10 mt-3 pt-3 border-t border-[#D4AF5A]/25 space-y-2 text-xs">
            <div className="flex items-center justify-center gap-4 text-[#FFF1D0]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E7C56A]" />
                <span className="font-semibold">{eventConfig.visarjanDate}</span>
              </div>
              <span className="text-[#D4AF5A]/40">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E7C56A]" />
                <span className="font-bold text-[#E7C56A]">{eventConfig.visarjanTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#F4E5C3]/90 pt-1 font-asar">
              <MapPin className="w-3.5 h-3.5 text-[#E7C56A] shrink-0" />
              <span>From: St. Mark School</span>
              <ArrowRight className="w-3 h-3 text-[#E7C56A] shrink-0" />
              <span className="font-bold text-[#E7C56A]">To: Tank Bund, Hyderabad</span>
            </div>

            <p className="font-cinzel text-[10px] uppercase tracking-wider text-[#E7C56A] pt-1 font-semibold">
              Tap to open Tank Bund in Google Maps ↗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleVisarjanMap;
