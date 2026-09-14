import React from "react";
import { eventConfig } from "../config/event";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";

export const TempleMainEvent: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center bg-gradient-to-b from-[#140406] via-[#240b03] to-[#140406]">
      <div className="w-full max-w-[400px] relative rounded-3xl p-6 bg-gradient-to-b from-[#3a1405] via-[#250b03] to-[#120401] border-2 border-[#d4af37]/50 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.25)] space-y-4">
        {/* Title (Image 2 Panel 6 Style) */}
        <div className="text-center space-y-1 border-b border-[#d4af37]/25 pb-3">
          <span className="font-asar text-[10px] uppercase tracking-widest text-[#ffd778] font-bold">
            Grand Utsav Celebration
          </span>
          <h2 className="font-yatra text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fff4cc] via-[#ffd778] to-[#d4af37]">
            GANESH CHATURTHI
          </h2>
          <p className="font-asar text-xs text-amber-200/90">
            Main Event & Maha Aarti
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-[#d4af37]/20">
            <Calendar className="w-4 h-4 text-[#ffd778] shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Date
              </span>
              <span className="font-semibold text-neutral-100">
                {eventConfig.eventDate}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-black/45 border border-[#d4af37]/20">
            <Clock className="w-4 h-4 text-[#ffd778] shrink-0" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Time
              </span>
              <span className="font-semibold text-[#ffd778]">
                {eventConfig.eventTime}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/45 border border-[#d4af37]/20">
            <MapPin className="w-4 h-4 text-[#ffd778] shrink-0 mt-0.5" />
            <div>
              <span className="font-asar text-[10px] uppercase text-neutral-400 font-bold block">
                Location
              </span>
              <span className="font-semibold text-neutral-100 block">
                {eventConfig.eventLocation}
              </span>
              <span className="font-asar text-xs text-neutral-400">
                Near St. Mark School
              </span>
            </div>
          </div>
        </div>

        {/* Large GET DIRECTIONS Button */}
        <a
          href={eventConfig.eventMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#e6b35a] via-[#ffd48a] to-[#d4af37] text-[#4a1f06] font-yatra font-bold text-sm uppercase tracking-wider shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2.5 active:scale-[0.98] transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#4a1f06] fill-[#4a1f06]" />
          <span>GET DIRECTIONS</span>
        </a>
      </div>
    </section>
  );
};

export default TempleMainEvent;
