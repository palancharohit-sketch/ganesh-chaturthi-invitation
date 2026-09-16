import React, { useState } from "react";
import { eventConfig } from "../config/event";
import { Share2, Copy, Check } from "lucide-react";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

export const TempleShare: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${eventConfig.associationName} - Ganesh Chaturthi ${eventConfig.year}`,
      text: `॥ श्री गणेशाय नमः ॥\n\nWith the blessings of Lord Ganesha, ${eventConfig.associationName} warmly invites you and your family to celebrate Ganesh Chaturthi ${eventConfig.year}!\n\nVenue: ${eventConfig.sthapanaLocation}\nDate: ${eventConfig.sthapanaDate} at ${eventConfig.sthapanaTime}\n\nView complete invitation:`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center text-center">
      {/* Share Section */}
      <div className="w-full max-w-md md:max-w-xl flex flex-col items-center space-y-3">
        <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          SHARE INVITATION
        </span>

        <OrnateDivider className="my-1" />

        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] p-5 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          <CornerFlourish position="top-left" size={16} />
          <CornerFlourish position="top-right" size={16} />
          <CornerFlourish position="bottom-left" size={16} />
          <CornerFlourish position="bottom-right" size={16} />

          {/* Small Elegant Buttons: Share & Copy Link */}
          <div className="relative z-10 flex items-center justify-center gap-3 w-full">
            <button
              onClick={handleShare}
              className="flex-1 h-10 rounded-full bg-gradient-to-r from-[#D4AF5A] via-[#E7C56A] to-[#B88632] text-[#3A1008] font-cinzel font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform hover:brightness-110 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#3A1008]" />
              <span>Share</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex-1 h-10 rounded-full bg-[#1A0805] border border-[#D4AF5A]/60 text-[#E7C56A] font-cinzel font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform hover:bg-[#260B06] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#E7C56A]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#E7C56A]" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleShare;

