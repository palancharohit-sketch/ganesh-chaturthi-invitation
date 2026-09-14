import React, { useState, useEffect } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../utils/sound";
import { CornerFlourish, DiyaFlame, OrnateDivider } from "./TempleMotifs";

export const TempleAudioCard: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [isPlaying, setIsPlaying] = useState(soundManager.isPlaying());
  const [volume, setVolume] = useState(soundManager.getVolume());

  useEffect(() => {
    const unsubscribe = soundManager.subscribe(() => {
      setIsMuted(soundManager.getMuted());
      setIsPlaying(soundManager.isPlaying());
      setVolume(soundManager.getVolume());
    });
    return unsubscribe;
  }, []);

  const togglePlay = () => {
    soundManager.togglePlay();
  };

  const toggleMute = () => {
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    soundManager.setVolume(val);
  };

  return (
    <section className="relative w-full px-4 py-8 flex flex-col items-center">
      {/* Storyboard Screen 15 Card */}
      <div className="w-full max-w-[400px] storyboard-card rounded-3xl p-6 text-center space-y-4 relative overflow-hidden">
        <CornerFlourish position="top-left" />
        <CornerFlourish position="top-right" />
        <CornerFlourish position="bottom-left" />
        <CornerFlourish position="bottom-right" />

        {/* Section Header */}
        <div className="text-center space-y-1">
          <span className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#E7C56A] font-bold block">
            ❖ TEMPLE AMBIENCE ❖
          </span>
        </div>

        <OrnateDivider className="my-1" />

        {/* Ornate Gold Audio Frame (Exact Screen 15) */}
        <div className="relative rounded-2xl p-5 bg-[#1A0805]/90 border-2 border-[#D4AF5A]/45 space-y-4 shadow-md">
          {/* Music Note Medallion */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full border-2 border-[#D4AF5A] bg-[#260B06] flex items-center justify-center text-[#E7C56A] shadow-[0_0_15px_rgba(212,175,90,0.35)]">
              <Music className="w-7 h-7 text-[#E7C56A]" />
            </div>
          </div>

          <div>
            <h3 className="font-yatra text-lg font-bold text-[#FFF1D0]">
              Temple Ambience
            </h3>
            <p className="font-asar text-xs text-[#E7C56A] mt-0.5">
              Jai Ganesha Jai Ganesha Devotional Melody
            </p>
          </div>

          {/* Controls: Play/Pause, Soundwave, Mute/Volume Slider */}
          <div className="space-y-3 pt-2">
            {/* Play/Pause Button */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="w-12 h-12 rounded-full border-2 border-[#D4AF5A] bg-gradient-to-r from-[#D4AF5A] via-[#E7C56A] to-[#B88632] flex items-center justify-center text-[#3A1008] shadow-lg active:scale-90 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-[#3A1008]" />
                ) : (
                  <Play className="w-5 h-5 fill-[#3A1008] ml-0.5" />
                )}
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="p-3 rounded-full bg-[#120604] border border-[#D4AF5A]/40 text-[#E7C56A] active:scale-90 transition-transform hover:bg-[#260B06]"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-[#F4E5C3]/50" />
                ) : (
                  <Volume2 className="w-5 h-5 text-[#E7C56A]" />
                )}
              </button>
            </div>

            {/* Animated Audio Waveform */}
            <div className="flex items-center justify-center gap-1.5 h-8 px-4 py-1 bg-[#120604]/80 rounded-full border border-[#D4AF5A]/25">
              {[30, 60, 40, 90, 70, 100, 50, 85, 45, 95, 35, 75, 55, 80].map((h, i) => (
                <div
                  key={`wave-${i}`}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying && !isMuted ? "bg-[#E7C56A] animate-pulse" : "bg-[#D4AF5A]/30"
                  }`}
                  style={{
                    height: isPlaying && !isMuted ? `${h * 0.22}px` : "4px",
                    animationDuration: `${0.5 + (i % 5) * 0.2}s`,
                  }}
                />
              ))}
            </div>

            {/* Volume Slider */}
            <div className="flex items-center justify-center gap-2 pt-1 px-4">
              <VolumeX className="w-3.5 h-3.5 text-[#E7C56A]/60" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume Slider"
                className="w-full accent-[#E7C56A] h-1.5 bg-[#120604] rounded-lg cursor-pointer"
              />
              <Volume2 className="w-3.5 h-3.5 text-[#E7C56A]" />
            </div>
          </div>
        </div>

        {/* Bottom Diyas */}
        <div className="flex items-center justify-between pt-1 border-t border-[#D4AF5A]/25 px-2">
          <DiyaFlame size="sm" />
          <span className="text-xs text-[#E7C56A] font-devanagari font-bold">
            ॐ गं गणपतये नमः
          </span>
          <DiyaFlame size="sm" />
        </div>
      </div>
    </section>
  );
};

export default TempleAudioCard;
