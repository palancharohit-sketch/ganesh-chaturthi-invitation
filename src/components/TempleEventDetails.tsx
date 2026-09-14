import React from "react";
import { eventConfig } from "../config/event";
import { Calendar, Clock, MapPin } from "lucide-react";
import { GaneshaLineIcon, LotusMotif, OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleEventDetails: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center text-center">
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        {/* Top Sacred Header */}
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          EVENT DETAILS
        </span>

        <OrnateDivider className="my-1" />

        {/* Golden Temple Plaque Box: Ganesh Sthapana */}
        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] p-5 flex flex-col items-center overflow-hidden">
          {/* Inner gold dashed stroke */}
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          {/* Corner Flourishes */}
          <CornerFlourish position="top-left" size={18} />
          <CornerFlourish position="top-right" size={18} />
          <CornerFlourish position="bottom-left" size={18} />
          <CornerFlourish position="bottom-right" size={18} />

          <GaneshaLineIcon size={28} className="text-[#E7C56A] mb-1 relative z-10" />

          <h2 className="relative z-10 font-yatra text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-sm">
            Ganesh Sthapana
          </h2>

          {/* Date & Time in Sacred Gold Typography */}
          <div className="relative z-10 flex items-center justify-center gap-6 py-2.5 my-2 border-y border-[#D4AF5A]/35 w-full">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E7C56A]" />
              <div className="text-left">
                <span className="font-cinzel text-[8.5px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                  Date
                </span>
                <span className="font-yatra text-sm font-bold text-[#FFF1D0]">
                  {eventConfig.sthapanaDate}
                </span>
              </div>
            </div>

            <div className="w-px h-7 bg-gradient-to-b from-transparent via-[#D4AF5A]/45 to-transparent" />

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E7C56A]" />
              <div className="text-left">
                <span className="font-cinzel text-[8.5px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                  Time
                </span>
                <span className="font-yatra text-sm font-bold text-[#E7C56A]">
                  {eventConfig.sthapanaTime}
                </span>
              </div>
            </div>
          </div>

          {/* Location Flow */}
          <div className="relative z-10 flex flex-col items-center space-y-1 pt-1">
            <div className="flex items-center gap-1.5 text-xs text-[#E7C56A]">
              <MapPin className="w-3.5 h-3.5 text-[#E7C56A]" />
              <span className="font-cinzel text-[10px] uppercase tracking-wider font-bold text-[#E7C56A]">
                Venue
              </span>
            </div>
            <p className="font-yatra text-base font-bold text-[#FFF1D0]">
              {eventConfig.sthapanaLocation}
            </p>
            <p className="font-asar text-xs text-[#F4E5C3]/80">
              Near St. Mark School, Hyderabad
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <LotusMotif size={18} className="text-[#E7C56A]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleEventDetails;

