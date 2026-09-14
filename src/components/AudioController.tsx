import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../utils/sound";

export const AudioController: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  useEffect(() => {
    return soundManager.subscribe(() => {
      setIsMuted(soundManager.getMuted());
    });
  }, []);

  const handleToggle = () => {
    const nextState = soundManager.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={isMuted ? "Unmute Temple Music" : "Mute Temple Music"}
      className="fixed top-3 right-3 z-50 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D4AF5A]/70 bg-[#1A0805]/85 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.8)] flex items-center justify-center text-[#E7C56A] active:scale-90 transition-all duration-300 hover:border-[#E7C56A] cursor-pointer"
    >
      {isMuted ? (
        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-60 text-[#F4E5C3]" />
      ) : (
        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E7C56A] animate-pulse" />
      )}
    </button>
  );
};

export default AudioController;
