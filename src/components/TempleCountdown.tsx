import React, { useState, useEffect } from "react";
import { eventConfig } from "../config/event";
import { OrnateDivider, CornerFlourish } from "./TempleMotifs";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const TempleCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(eventConfig.countdownDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isComplete: false,
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center text-center">
      <div className="w-full max-w-xl md:max-w-2xl flex flex-col items-center space-y-3">
        {/* Section Heading */}
        <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
          COUNTDOWN
        </span>

        <OrnateDivider className="my-1" />

        {/* Golden Temple Plaque Box */}
        <div className="w-full relative rounded-3xl bg-gradient-to-b from-[#3A1008] via-[#260B06] to-[#1A0805] border border-[#D4AF5A]/60 shadow-[0_12px_28px_rgba(0,0,0,0.85),0_0_20px_rgba(184,134,50,0.18)] p-5 sm:p-7 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-1.5 rounded-2xl border border-dashed border-[#D4AF5A]/35 pointer-events-none" />

          <CornerFlourish position="top-left" size={18} />
          <CornerFlourish position="top-right" size={18} />
          <CornerFlourish position="bottom-left" size={18} />
          <CornerFlourish position="bottom-right" size={18} />

          <h2 className="relative z-10 font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#FFF1D0] uppercase mb-1">
            TO GANESH CHATURTHI
          </h2>
          <p className="relative z-10 font-asar text-xs sm:text-sm text-[#F4E5C3]/80 font-semibold mb-4">
            14 September 2026 • 7:00 PM
          </p>

          {timeLeft.isComplete ? (
            <div className="relative z-10 py-3 px-5 rounded-2xl bg-[#4A1009]/80 border border-[#D4AF5A]/60 flex flex-col items-center justify-center gap-1 shadow-inner">
              <span className="font-devanagari text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow">
                गणपति बप्पा मोरया
              </span>
              <span className="font-asar text-xs sm:text-sm text-[#FFF1D0]">
                The Divine Festivities Have Begun!
              </span>
            </div>
          ) : (
            /* ONE SINGLE HORIZONTAL ROW: DAYS | HOURS | MINUTES | SECONDS */
            <div className="relative z-10 w-full max-w-lg flex items-center justify-between gap-2 sm:gap-4 px-1 sm:px-4">
              {timeUnits.map((unit) => (
                <div key={unit.label} className="flex-1 flex flex-col items-center justify-center">
                  {/* Elegant Gold Ornamental Circle */}
                  <div className="relative w-15 h-15 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border border-[#D4AF5A] bg-gradient-to-b from-[#260B06] via-[#1A0805] to-[#120604] shadow-[inset_0_2px_4px_rgba(255,241,208,0.25),0_6px_14px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center">
                    <div className="absolute inset-1 rounded-full border border-dashed border-[#D4AF5A]/40 pointer-events-none" />

                    <span className="font-yatra text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFF1D0] via-[#E7C56A] to-[#D4AF5A] drop-shadow leading-none">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="font-cinzel text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#F4E5C3]/90 mt-1.5">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TempleCountdown;
