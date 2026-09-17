import React from "react";
import { eventConfig } from "../config/event";
import { CornerFlourish, DiyaFlame, LotusMotif } from "./TempleMotifs";

export const TempleInvitation: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center">
      {/* Storyboard Parchment Card */}
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl storyboard-parchment rounded-3xl p-6 sm:p-10 relative overflow-hidden text-center shadow-2xl">
        {/* Ornate Corner Flourishes in Antique Gold */}
        <CornerFlourish position="top-left" className="text-[#B88632]" size={28} />
        <CornerFlourish position="top-right" className="text-[#B88632]" size={28} />
        <CornerFlourish position="bottom-left" className="text-[#B88632]" size={28} />
        <CornerFlourish position="bottom-right" className="text-[#B88632]" size={28} />

        {/* Inner Gold Inset Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-[#C9973E]/45 pointer-events-none" />

        {/* Top Decorative Line */}
        <div className="flex items-center justify-center gap-2 mb-3 text-[#8D5A18]">
          <span className="w-8 h-px bg-[#B88632]/50" />
          <LotusMotif size={18} className="text-[#8D5A18]" />
          <span className="w-8 h-px bg-[#B88632]/50" />
        </div>

        {/* Header */}
        <h3 className="font-yatra text-base sm:text-lg uppercase tracking-wider text-[#8D5A18] font-bold block mb-1">
          {eventConfig.associationName}
        </h3>
        <p className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-[#B88632] mb-4">
          GANESH CHATURTHI CELEBRATION
        </p>

        {/* Exact English Invitation Text */}
        <div className="my-5 px-3">
          <p className="font-asar text-base sm:text-lg text-[#3A1008] font-semibold leading-relaxed">
            "With the divine blessings of Lord Ganesha, we invite you to celebrate Ganesh Chaturthi with us."
          </p>
        </div>

        {/* Center Lotus Emblem */}
        <div className="flex justify-center my-3">
          <LotusMotif size={24} className="text-[#8D5A18]" />
        </div>

        {/* Bottom Glowing Brass Diyas at Corners */}
        <div className="flex items-center justify-between pt-3 border-t border-[#B88632]/30 px-2">
          <DiyaFlame size="sm" />
          <span className="text-xs sm:text-sm text-[#8D5A18] font-devanagari font-bold tracking-widest">
            GANPATI BAPPA MORYA
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>
    </section>
  );
};

export default TempleInvitation;
