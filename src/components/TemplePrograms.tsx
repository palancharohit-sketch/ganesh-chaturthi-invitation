import React from "react";
import { eventConfig } from "../config/event";
import { Calendar, Clock, MapPin } from "lucide-react";
import { LotusMotif, OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TemplePrograms: React.FC = () => {
  return (
    <section className="px-4 py-8 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        {/* Section Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          PROGRAMS
        </span>

        <OrnateDivider className="my-1" />

        {/* Golden Temple Plaque Box: GANESH STHAPANA PROGRAM */}
        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] p-5 flex flex-col items-center overflow-hidden">
          {/* Inner gold dashed stroke */}
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          {/* Corner Flourishes */}
          <CornerFlourish position="top-left" size={20} />
          <CornerFlourish position="top-right" size={20} />
          <CornerFlourish position="bottom-left" size={20} />
          <CornerFlourish position="bottom-right" size={20} />

          {/* Top Lotus Crest */}
          <div className="relative z-10 w-11 h-11 rounded-full border border-[#D4AF5A]/60 bg-[#1A0805] flex items-center justify-center text-[#E7C56A] shadow-md mb-2">
            <LotusMotif size={22} className="text-[#E7C56A]" />
          </div>

          <h3 className="relative z-10 font-yatra text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] tracking-wider drop-shadow-sm">
            GANESH STHAPANA
          </h3>

          <div className="relative z-10 flex items-center justify-center gap-6 py-2.5 my-2 border-y border-[#D4AF5A]/35 w-full">
            <div className="flex items-center gap-2 text-xs">
              <Calendar className="w-4 h-4 text-[#E7C56A]" />
              <span className="font-semibold text-[#FFF1D0]">{eventConfig.sthapanaDate}</span>
            </div>
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#D4AF5A]/45 to-transparent" />
            <div className="flex items-center gap-2 text-xs">
              <Clock className="w-4 h-4 text-[#E7C56A]" />
              <span className="font-bold text-[#E7C56A]">{eventConfig.sthapanaTime}</span>
            </div>
          </div>

          {/* Venue Location */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-xs text-[#F4E5C3]/90 pt-1 font-asar">
            <MapPin className="w-3.5 h-3.5 text-[#E7C56A] shrink-0" />
            <span className="font-semibold text-[#FFF1D0]">{eventConfig.sthapanaLocation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplePrograms;

