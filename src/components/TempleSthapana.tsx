import React from "react";
import { eventConfig } from "../config/event";
import { Calendar, Clock, MapPin } from "lucide-react";

export const TempleSthapana: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center bg-gradient-to-b from-[#140406] via-[#200609] to-[#140406]">
      <div className="w-full max-w-[400px] relative rounded-3xl p-6 bg-gradient-to-b from-[#2e0e13] via-[#1c0609] to-[#100204] border-2 border-[#b8842d]/40 shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_15px_rgba(212,175,55,0.15)] overflow-hidden">
        {/* Header with Diya and Marigold Emblem */}
        <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-4 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-100 shadow-[0_0_10px_#f59e0b] animate-flame mb-[-2px]" />
              <div className="w-6 h-2.5 rounded-b-lg bg-[#8d5a18] border border-yellow-300/40" />
            </div>
            <div>
              <span className="font-asar text-[10px] uppercase tracking-widest text-[#ffd778] font-bold block">
                Sacred Welcoming
              </span>
              <h3 className="font-yatra text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cc] via-[#ffd778] to-[#d4af37]">
                GANESH STHAPANA
              </h3>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#5b2607]/60 border border-[#d4af37]/40 flex items-center justify-center text-sm shadow">
            🌼
          </div>
        </div>

        {/* Details Grid */}
        <div className="space-y-3 text-xs sm:text-sm text-neutral-200">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-white/5">
            <Calendar className="w-4 h-4 text-[#ffd778] shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Date
              </span>
              <span className="font-semibold text-neutral-100">
                {eventConfig.sthapanaDate}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-white/5">
            <Clock className="w-4 h-4 text-[#ffd778] shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Time
              </span>
              <span className="font-semibold text-[#ffd778]">
                {eventConfig.sthapanaTime}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/45 border border-white/5">
            <MapPin className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Location
              </span>
              <span className="font-semibold text-neutral-100 block">
                {eventConfig.sthapanaLocation}
              </span>
              <span className="font-asar text-xs text-neutral-400">
                Near St. Mark School
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleSthapana;
