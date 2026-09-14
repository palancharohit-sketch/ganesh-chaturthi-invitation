import React, { useState } from "react";
import AudioController from "./components/AudioController";
import TempleOpeningCurtain from "./components/TempleOpeningCurtain";
import TempleHero from "./components/TempleHero";
import TempleEventDetails from "./components/TempleEventDetails";
import TempleCountdown from "./components/TempleCountdown";
import TempleInvitation from "./components/TempleInvitation";
import TempleOrganizers from "./components/TempleOrganizers";
import TempleDarshan from "./components/TempleDarshan";
import TempleMemories from "./components/TempleMemories";
import TempleGaneshVisarjan from "./components/TempleGaneshVisarjan";
import TempleLocation from "./components/TempleLocation";
import TempleContact from "./components/TempleContact";
import TempleShare from "./components/TempleShare";
import TempleFooter from "./components/TempleFooter";

export const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleOpened = () => {
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen bg-[#120604] text-neutral-100 flex justify-center selection:bg-[#D4AF5A]/30 selection:text-[#E7C56A] overflow-x-hidden">
      {/* Floating Antique Gold Mute / Unmute Control (Top Corner) */}
      <AudioController />

      {/* 1, 2, 3: Fullscreen Temple Entrance, Doors Opening & Direct Real Ganesh Reveal */}
      <TempleOpeningCurtain isOpened={isOpened} onOpened={handleOpened} />

      {/* Primary Mobile Cinematic Temple Sanctuary */}
      <main
        id="temple-main-content"
        className="w-full max-w-[440px] min-h-screen bg-gradient-to-b from-[#1A0805] via-[#260B06] to-[#120604] border-x border-[#B88632]/30 shadow-[0_0_70px_rgba(0,0,0,0.95)] relative flex flex-col"
      >
        {/* Sacred Temple Texture Layer */}
        <div className="absolute inset-0 temple-pattern opacity-20 pointer-events-none" />

        {/* Continuous Volumetric Temple Light Radiance */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.18)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(184,134,50,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(231,197,106,0.12)_0%,_transparent_70%)] pointer-events-none" />

        {/* 4. MAIN INVITATION / HERO (Large Real Ganesh Idol Centered) */}
        <TempleHero />

        {/* 5. COUNTDOWN (One Single Horizontal Row: DAYS | HOURS | MINUTES | SECONDS) */}
        <TempleCountdown />

        {/* 6. EVENT DETAILS (Moved immediately below COUNTDOWN) */}
        <TempleEventDetails />

        {/* 7. NEHRU NAGAR LOCATION (Moved immediately below EVENT DETAILS) */}
        <TempleLocation />

        {/* 8. INVITATION MESSAGE (Parchment Scroll with Devotional Welcome) */}
        <TempleInvitation />

        {/* 9. OUR ORGANIZERS (True 3D Mobile Carousel Only, No Extra Name List) */}
        <TempleOrganizers />

        {/* 10. GANESH DARSHAN (Large Ganesh Idol + Seek Blessings Flower Shower) */}
        <TempleDarshan />

        {/* 11. GANESH VISARJAN */}
        <TempleGaneshVisarjan />

        {/* 12. MEMORIES (Previous Celebrations Photo Collection - Immediately after Visarjan) */}
        <TempleMemories />

        {/* 13. SMALL RSVP (Compact WhatsApp Contact) */}
        <TempleContact />

        {/* 14. SMALL SHARE (Compact Share & Copy Link) */}
        <TempleShare />

        {/* 15. FINAL BLESSING (Lord Ganesha Sanctuary & Closing Mantra) */}
        <TempleFooter />
      </main>
    </div>
  );
};

export default App;
