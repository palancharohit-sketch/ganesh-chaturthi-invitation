import React from "react";
import { eventConfig, type EventItem } from "../config/event";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Sparkles,
  Gift,
  Utensils,
  Waves,
  Gavel,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { OrnateDivider, CornerFlourish, DiyaFlame } from "./TempleMotifs";

export const TempleEvents: React.FC = () => {
  const events = eventConfig.events;
  const luckyDrawPhone = "9133007992";
  const luckyDrawPhoneDisplay = "91330 07992";
  const luckyDrawWhatsappUrl = `https://wa.me/91${luckyDrawPhone}?text=${encodeURIComponent(
    "Hello, I would like to participate in the NAVA YUVA SENA Laddu Lucky Draw. Please share the payment details."
  )}`;

  const getEventIcon = (id: string) => {
    switch (id) {
      case "anna-prasadam":
        return <Utensils className="w-5 h-5 text-[#E7C56A]" />;
      case "lucky-draw":
        return <Gift className="w-5 h-5 text-[#F57C28]" />;
      case "laddu-auction":
        return <Gavel className="w-5 h-5 text-[#E7C56A]" />;
      case "ganesh-visarjan":
        return <Waves className="w-5 h-5 text-[#E7C56A]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E7C56A]" />;
    }
  };

  return (
    <section id="events" className="relative px-4 py-12 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-xl md:max-w-4xl lg:max-w-5xl flex flex-col items-center space-y-5">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-1 w-full">
          <div className="flex items-center gap-2">
            <span className="text-[#E65A16] text-sm">❖</span>
            <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.3em] text-[#E7C56A] font-bold">
              UTSAV SCHEDULE
            </span>
            <span className="text-[#E65A16] text-sm">❖</span>
          </div>

          <h2 className="font-yatra text-2xl sm:text-3xl md:text-4xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow-md">
            FESTIVE EVENTS
          </h2>

          <p className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#E65A16] uppercase">
            NAVA YUVA SENA • LB NAGAR
          </p>

          <p className="font-asar text-xs sm:text-sm text-[#F4E5C3]/90 italic max-w-md px-2 pt-0.5">
            "Join us with your family in celebrating each sacred day of Ganesh Utsav with joy and devotion."
          </p>

          <OrnateDivider className="my-2 max-w-[280px]" />
        </div>

        {/* Event Cards Responsive Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
          {events.map((event: EventItem, idx: number) => {
            const isHighlighted = event.highlight;
            const isLuckyDraw = event.id === "lucky-draw";
            const isAnnaPrasadam = event.id === "anna-prasadam";
            const isAuction = event.id === "laddu-auction";
            const isNimarjan = event.id === "ganesh-visarjan";

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative w-full rounded-3xl p-5 text-left overflow-hidden transition-all duration-300 ${
                  isLuckyDraw
                    ? "bg-gradient-to-b from-[#58150C] via-[#350D08] to-[#1C0605] border-2 border-[#E7C56A] shadow-[0_12px_36px_rgba(0,0,0,0.9),0_0_24px_rgba(230,90,22,0.35)]"
                    : isHighlighted
                    ? "bg-gradient-to-b from-[#4A1009] via-[#2E0B07] to-[#1A0605] border-2 border-[#D4AF5A] shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(230,90,22,0.25)]"
                    : "bg-gradient-to-b from-[#380E09] via-[#240806] to-[#160403] border border-[#D4AF5A]/60 shadow-[0_8px_24px_rgba(0,0,0,0.8)] hover:border-[#E7C56A]"
                }`}
              >
                {/* Inner gold dashed frame */}
                <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/30 pointer-events-none" />

                {/* Corner Flourishes */}
                <CornerFlourish position="top-left" size={16} />
                <CornerFlourish position="top-right" size={16} />
                <CornerFlourish position="bottom-left" size={16} />
                <CornerFlourish position="bottom-right" size={16} />

                {/* Subtle festive background pattern */}
                <div className="absolute inset-0 temple-pattern opacity-15 pointer-events-none" />

                {/* Card Top: Number, Icon & Badge */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    {/* Event Step Number */}
                    <span className="font-cinzel text-xs font-black text-[#D4AF5A]/60 tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Icon container */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1A0605] to-[#4A1009] border border-[#D4AF5A]/60 flex items-center justify-center shadow-md">
                      {getEventIcon(event.id)}
                    </div>
                  </div>

                  {event.badge && (
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${
                        isLuckyDraw
                          ? "bg-gradient-to-r from-[#E65A16] to-[#B88632] text-[#FFF1D0] border border-[#FFF1D0]/60 animate-pulse"
                          : isHighlighted
                          ? "bg-gradient-to-r from-[#E65A16] to-[#B88632] text-[#FFF1D0] border border-[#FFF1D0]/40"
                          : "bg-[#1A0605]/90 text-[#E7C56A] border border-[#D4AF5A]/40"
                      }`}
                    >
                      {event.badge}
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <div className="relative z-10">
                  <h3 className="font-yatra text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] leading-snug drop-shadow-sm">
                    {event.title}
                  </h3>

                  {/* Special Telugu Subtitle for Anna Prasadam */}
                  {isAnnaPrasadam && (
                    <p className="font-telugu text-sm font-semibold text-[#E7C56A] mt-0.5 tracking-wide">
                      అన్నప్రసాదం కార్యక్రమం
                    </p>
                  )}
                </div>

                {/* Date & Time Row */}
                <div className="relative z-10 flex flex-wrap items-center gap-3 my-2.5 py-2 border-y border-[#D4AF5A]/25 text-xs">
                  <div className="flex items-center gap-1.5 text-[#FFF1D0]">
                    <Calendar className="w-3.5 h-3.5 text-[#E7C56A] shrink-0" />
                    <span className="font-semibold">{event.date}</span>
                  </div>

                  {event.time && (
                    <>
                      <span className="text-[#D4AF5A]/40">•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#E7C56A] shrink-0" />
                        <span
                          className={`font-bold ${
                            isAuction || isNimarjan
                              ? "text-[#FFF1D0] bg-[#E65A16]/25 px-2 py-0.5 rounded border border-[#E65A16]/40"
                              : "text-[#E7C56A]"
                          }`}
                        >
                          {event.time}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="relative z-10 font-asar text-xs text-[#F4E5C3]/85 leading-relaxed">
                  {event.description}
                </p>

                {/* Special Location & View Map Button for Anna Prasadam */}
                {isAnnaPrasadam && (
                  <div className="relative z-10 mt-3 pt-3 border-t border-[#D4AF5A]/30 space-y-2.5">
                    <div className="flex items-start gap-2 text-xs">
                      <div className="mt-0.5 p-1 rounded-full bg-[#E7C56A]/15 border border-[#E7C56A]/50 text-[#E7C56A] shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-[#E7C56A]" />
                      </div>
                      <div>
                        <span className="font-cinzel text-[9.5px] uppercase tracking-wider text-[#F4E5C3]/75 block font-bold">
                          LOCATION
                        </span>
                        <span className="font-yatra font-bold text-[#FFF1D0] text-sm sm:text-base tracking-wide leading-snug">
                          LB NAGAR, HYDERABAD
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/wVrAzuHnUw5QHBmm7?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-xl bg-gradient-to-r from-[#8B1E14] via-[#A82417] to-[#8B1E14] border border-[#E7C56A]/80 text-[#FFF1D0] font-cinzel font-bold text-[11px] tracking-wider uppercase shadow-md active:scale-95 transition-all hover:brightness-110 hover:border-[#FFF1D0] cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#E7C56A]" />
                      <span>VIEW MAP</span>
                    </a>
                  </div>
                )}

                {/* Special Details for Lucky Draw Card: Token, Prize & Call/WhatsApp CTA */}
                {isLuckyDraw && (
                  <div className="relative z-10 mt-3 pt-3 border-t border-[#D4AF5A]/30 space-y-3">
                    {/* Prize & Token Info Banner */}
                    <div className="grid grid-cols-2 gap-2 bg-[#1A0605]/80 p-2.5 rounded-2xl border border-[#D4AF5A]/40">
                      <div className="text-center border-r border-[#D4AF5A]/25 pr-2">
                        <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                          Grand Prize
                        </span>
                        <span className="font-yatra text-sm font-bold text-[#E7C56A]">
                          Maha Laddu
                        </span>
                      </div>
                      <div className="text-center pl-1">
                        <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#F4E5C3]/70 block font-bold">
                          Entry Token
                        </span>
                        <span className="font-yatra text-sm font-bold text-[#FFF1D0]">
                          ₹99/- Only
                        </span>
                      </div>
                    </div>

                    {/* Contact Number Display */}
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <span className="text-[#F4E5C3]/70 font-cinzel text-[10px] uppercase font-bold tracking-wider">
                        Contact:
                      </span>
                      <a
                        href={`tel:+91${luckyDrawPhone}`}
                        className="font-cinzel text-xs font-bold text-[#E7C56A] hover:underline"
                      >
                        +91 {luckyDrawPhoneDisplay}
                      </a>
                    </div>

                    {/* Action Buttons: CALL NOW & WHATSAPP */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {/* Call Now Button */}
                      <a
                        href={`tel:+91${luckyDrawPhone}`}
                        className="h-10 rounded-xl bg-gradient-to-r from-[#8B1E14] to-[#B32B1C] border border-[#E7C56A]/80 text-[#FFF1D0] font-cinzel font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all hover:brightness-110"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FFF1D0]" />
                        <span>CALL NOW</span>
                      </a>

                      {/* WhatsApp Button */}
                      <a
                        href={luckyDrawWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 rounded-xl bg-gradient-to-r from-[#1E4D2B] via-[#2D7340] to-[#1E4D2B] border border-[#D4AF5A]/80 text-[#FFF1D0] font-cinzel font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all hover:brightness-110"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#FFF1D0] fill-[#FFF1D0]" />
                        <span>WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Special Highlight for Auction vs Nimarjan Timings */}
                {isAuction && (
                  <div className="relative z-10 mt-2.5 pt-2 border-t border-[#D4AF5A]/25 flex items-center justify-between text-[11px] text-[#E7C56A]">
                    <span className="font-cinzel uppercase font-semibold tracking-wider text-[#F4E5C3]/70">
                      Pre-Nimarjan Event
                    </span>
                    <span className="font-yatra font-bold text-[#FFF1D0]">
                      Auction strictly at 7:00 PM
                    </span>
                  </div>
                )}

                {isNimarjan && (
                  <div className="relative z-10 mt-2.5 pt-2 border-t border-[#D4AF5A]/25 flex items-center justify-between text-[11px] text-[#E7C56A]">
                    <div className="flex items-center gap-1 text-[#F4E5C3]/70">
                      <MapPin className="w-3 h-3 text-[#E7C56A]" />
                      <span className="font-cinzel uppercase font-semibold tracking-wider">
                        Starting from LB Nagar
                      </span>
                    </div>
                    <span className="font-yatra font-bold text-[#FFF1D0]">
                      Procession at 7:30 PM
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Mantra with Sacred Diyas */}
        <div className="flex items-center justify-center gap-3 pt-4 text-xs text-[#E7C56A]">
          <DiyaFlame size="sm" />
          <span className="font-devanagari text-xs font-bold text-[#FFF1D0] tracking-widest">
            ॥ ॐ गं गणपतये नमः ॥
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>
    </section>
  );
};

export default TempleEvents;

