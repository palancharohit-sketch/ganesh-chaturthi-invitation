import React from "react";
import { eventConfig } from "../config/event";
import { MapPin } from "lucide-react";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleLocation: React.FC = () => {
  const handleMapClick = () => {
    window.open(eventConfig.eventMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        {/* Section Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          LOCATION
        </span>

        <OrnateDivider className="my-1" />

        {/* CLICKABLE MAP & VENUE AREA (DIRECT TAP OPENS GOOGLE MAPS, NO EXTRA BUTTONS) */}
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

          {/* Subtle Map Grid Texture */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF5A_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

          {/* Bouncing Gold Location Pin */}
          <div className="relative z-10 flex flex-col items-center pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E7C56A]/20 border border-[#E7C56A] flex items-center justify-center animate-bounce shadow-[0_0_15px_#E7C56A]">
              <MapPin className="w-6 h-6 text-[#E7C56A] fill-[#E7C56A]" />
            </div>

            <span className="mt-3 inline-block px-3.5 py-0.5 rounded-full bg-[#260B06] border border-[#D4AF5A]/50 text-[#FFF1D0] font-yatra text-xs font-semibold shadow">
              {eventConfig.sthapanaLocation}
            </span>
          </div>

          {/* Venue Address Info */}
          <div className="relative z-10 mt-4 pt-3 border-t border-[#D4AF5A]/25 space-y-1">
            <h3 className="font-yatra text-base font-bold text-[#FFF1D0] group-hover:text-[#E7C56A] transition-colors">
              {eventConfig.associationName}
            </h3>
            <p className="font-asar text-xs text-[#F4E5C3]/80">
              Near St. Mark School, Hyderabad - 500027
            </p>
            <p className="font-cinzel text-[10px] uppercase tracking-wider text-[#E7C56A] pt-1 font-semibold">
              Tap to open in Google Maps ↗
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleLocation;
