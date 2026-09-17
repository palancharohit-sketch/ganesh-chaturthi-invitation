import React, { useState } from "react";
import AudioController from "./components/AudioController";
import TempleOpeningCurtain from "./components/TempleOpeningCurtain";
import TempleHero from "./components/TempleHero";
import TempleInvitation from "./components/TempleInvitation";
import TempleLocation from "./components/TempleLocation";
import TempleEvents from "./components/TempleEvents";
import TempleGaneshVisarjan from "./components/TempleGaneshVisarjan";
import TempleDarshan from "./components/TempleDarshan";
import TempleMemories from "./components/TempleMemories";
import TempleContact from "./components/TempleContact";
import TempleShare from "./components/TempleShare";
import TempleFooter from "./components/TempleFooter";
import { Calendar } from "lucide-react";

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpened = () => {
    setIsOpened(true);
  };

  const scrollToEvents = () => {
    const el = document.getElementById("events");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#180605] via-[#2E0B07] to-[#100403] text-neutral-100 flex flex-col items-center selection:bg-[#E65A16]/30 selection:text-[#E7C56A] relative overflow-x-hidden">
      {/* Floating Controls (Top Corners) */}
      <AudioController />

      {/* Floating Elegant Events Navigation Pill (Shows after doors open) */}
      {isOpened && (
        <button
          onClick={scrollToEvents}
          aria-label="Scroll to Festive Events"
          className="fixed top-3 left-3 z-50 h-8 sm:h-9 px-3 rounded-full border border-[#D4AF5A]/70 bg-[#180605]/85 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.8)] flex items-center gap-1.5 text-[#E7C56A] active:scale-95 transition-all duration-300 hover:border-[#E7C56A] cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#E7C56A]" />
          <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#FFF1D0]">
            EVENTS
          </span>
        </button>
      )}

      {/* 1. Fullscreen Mandap Entrance, Doors Opening & Direct Bappa Reveal */}
      <TempleOpeningCurtain isOpened={isOpened} onOpened={handleOpened} />

      {/* Full-width Festive Mandap Sanctuary */}
      <main
        id="temple-main-content"
        className="w-full min-h-screen relative flex flex-col items-center"
      >
        {/* Sacred Temple & Mandap Texture Layer (spans 100% full screen) */}
        <div className="absolute inset-0 temple-pattern opacity-20 pointer-events-none" />

        {/* Continuous Volumetric Saffron & Golden Light Radiance across viewport */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(circle_at_center,_rgba(230,90,22,0.22)_0%,_rgba(231,197,106,0.16)_40%,_transparent_72%)] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(212,175,90,0.18)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(230,90,22,0.15)_0%,_transparent_70%)] pointer-events-none" />

        {/* Subtle Decorative Golden Border Columns for Ultra-wide screens */}
        <div className="hidden xl:block absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-[#D4AF5A]/30 to-transparent pointer-events-none" />
        <div className="hidden xl:block absolute inset-y-0 right-6 w-px bg-gradient-to-b from-transparent via-[#D4AF5A]/30 to-transparent pointer-events-none" />

        {/* 2. BAPPA HERO (Sri Sai Youth Association, Large Ganesha Idol, Devotional Ambience) */}
        <TempleHero />

        {/* 3. INVITATION MESSAGE (Parchment Card with Devotional Welcome & Bappa Blessing) */}
        <TempleInvitation />

        {/* 5. LB NAGAR LOCATION (Interactive Map area) */}
        <TempleLocation />

        {/* 6. FESTIVE CELEBRATION EVENTS (Anna Prasadam, Lucky Draw ₹99, Laddu Auction, Visarjan) */}
        <TempleEvents />

        {/* 7. GANESH VISARJAN DETAILS */}
        <TempleGaneshVisarjan />

        {/* 9. SEEK BAPPA BLESSING (Gentle Scale, Golden Aura & Flower Shower) */}
        <TempleDarshan />

        {/* 10. MEMORIES (Previous Celebrations Photo Gallery) */}
        <TempleMemories />

        {/* 11. RSVP (WhatsApp Contact) */}
        <TempleContact />

        {/* 12. SHARE INVITATION */}
        <TempleShare />

        {/* 13. FINAL BLESSING & CLOSING MANTRA (Ganpati Bappa Morya) */}
        <TempleFooter />
      </main>
    </div>
  );
};

export default App;
