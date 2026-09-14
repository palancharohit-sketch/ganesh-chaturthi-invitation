import React from "react";
import { CornerFlourish, DiyaFlame, LotusMotif } from "./TempleMotifs";

export const TempleInvitation: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center">
      {/* Storyboard Screen 8 Parchment Card */}
      <div className="w-full max-w-[400px] storyboard-parchment rounded-3xl p-7 relative overflow-hidden text-center shadow-2xl">
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

        {/* Screen 8 Header: INVITATION MESSAGE */}
        <h3 className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8D5A18] font-bold block mb-4">
          INVITATION MESSAGE
        </h3>

        {/* Exact English Invitation Text from Storyboard Screen 8 */}
        <div className="my-6 px-3">
          <p className="font-asar text-base sm:text-lg text-[#3A1008] font-semibold leading-relaxed">
            You are warmly invited to join us in celebrating Ganesh Chaturthi with devotion, joy and togetherness.
          </p>
        </div>

        {/* Center Lotus Emblem */}
        <div className="flex justify-center my-4">
          <LotusMotif size={24} className="text-[#8D5A18]" />
        </div>

        {/* Bottom Glowing Brass Diyas at Corners (Exact Screen 8 Placement) */}
        <div className="flex items-center justify-between pt-3 border-t border-[#B88632]/30 px-2">
          <DiyaFlame size="sm" />
          <span className="text-xs text-[#8D5A18] font-devanagari font-bold">
            गणपति बप्पा मोरया
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>
    </section>
  );
};

export default TempleInvitation;
