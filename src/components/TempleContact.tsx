import React from "react";
import { eventConfig } from "../config/event";
import { MessageCircle } from "lucide-react";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleContact: React.FC = () => {
  const primaryPhone = eventConfig.contactNumbers[0] || eventConfig.whatsappNumber;

  const politeMessage = "Hello Sri Sai Youth Association, I would like to attend the Ganesh Chaturthi celebration.";
  const whatsappUrl = `https://wa.me/91${eventConfig.whatsappNumber}?text=${encodeURIComponent(
    politeMessage
  )}`;

  return (
    <section className="relative w-full px-4 py-6 flex flex-col items-center text-center">
      {/* Compact Small RSVP Section */}
      <div className="w-full max-w-[390px] flex flex-col items-center space-y-3">
        <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          CONTACT / RSVP
        </span>

        <OrnateDivider className="my-1" />

        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] p-5 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          <CornerFlourish position="top-left" size={16} />
          <CornerFlourish position="top-right" size={16} />
          <CornerFlourish position="bottom-left" size={16} />
          <CornerFlourish position="bottom-right" size={16} />

          <div className="relative z-10 space-y-0.5">
            <p className="font-yatra text-base font-bold text-[#FFF1D0]">
              WhatsApp RSVP
            </p>
            <p className="font-cinzel text-xs font-bold text-[#E7C56A] tracking-wider">
              +91 {primaryPhone}
            </p>
          </div>

          {/* Compact Confirm via WhatsApp Pill Button */}
          <div className="relative z-10 w-full pt-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 rounded-full bg-gradient-to-r from-[#1E4D2B] via-[#2D7340] to-[#1E4D2B] border border-[#D4AF5A]/70 text-[#FFF1D0] font-cinzel font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform hover:brightness-110"
            >
              <MessageCircle className="w-4 h-4 text-[#FFF1D0] fill-[#FFF1D0]" />
              <span>Confirm via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleContact;

