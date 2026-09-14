import React from "react";

// 1. Storyboard Master Ganesha Line Emblem
export const GaneshaLineIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#E7C56A]",
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} inline-block`}
  >
    {/* Crown / Mukut */}
    <path
      d="M32 6L35 14H29L32 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 14L32 10L38 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Tilak / Trishul mark */}
    <path
      d="M32 17V26M30 19C30 23 32 26 32 26C32 26 34 23 34 19"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Head and Ears */}
    <path
      d="M26 21C22 21 17 24 16 29C15 34 18 39 23 39C24.5 39 25.5 38.5 26.5 37.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M38 21C42 21 47 24 48 29C49 34 46 39 41 39C39.5 39 38.5 38.5 37.5 37.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Trunk curving right */}
    <path
      d="M29 27C29 34 30 38 34 42C38 46 43 45 44 41C45 37 41 35 38 36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Tusk */}
    <path
      d="M26 35L24 37"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Ornate Indian Lotus Motif
export const LotusMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "text-[#D4AF5A]",
  size = 22,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} inline-block`}
  >
    {/* Center petal */}
    <path
      d="M16 4C14 9 13.5 16 16 24C18.5 16 18 9 16 4Z"
      fill="currentColor"
      fillOpacity="0.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Left inner petal */}
    <path
      d="M14 9C10.5 13 9 18 12.5 24C14.5 19 15 14 14 9Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Right inner petal */}
    <path
      d="M18 9C21.5 13 23 18 19.5 24C17.5 19 17 14 18 9Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Left outer flare */}
    <path
      d="M11 15C6.5 18 5 22 9.5 26C11.5 23 12 19 11 15Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    {/* Right outer flare */}
    <path
      d="M21 15C25.5 18 27 22 22.5 26C20.5 23 20 19 21 15Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    {/* Base pod */}
    <path
      d="M8 26C12 28 20 28 24 26"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 3. Indian Corner Flourish for Cards (Master Storyboard Border Style)
export const CornerFlourish: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: number;
}> = ({ position, className = "text-[#D4AF5A]/70", size = 24 }) => {
  const rotationClasses = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  const positionClasses = {
    "top-left": "top-1.5 left-1.5",
    "top-right": "top-1.5 right-1.5",
    "bottom-left": "bottom-1.5 left-1.5",
    "bottom-right": "bottom-1.5 right-1.5",
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${rotationClasses[position]} ${className}`}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M2 22V8C2 4.68629 4.68629 2 8 2H22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 18V9C5 6.79086 6.79086 5 9 5H18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <circle cx="2" cy="22" r="1.5" fill="currentColor" />
        <circle cx="22" cy="2" r="1.5" fill="currentColor" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

// 4. Ornate Gold Divider with Center Lotus or Diamond
export const OrnateDivider: React.FC<{
  text?: string;
  className?: string;
}> = ({ text, className = "my-4" }) => (
  <div className={`w-full flex items-center justify-center gap-2.5 ${className}`}>
    <span className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent via-[#D4AF5A]/50 to-[#E7C56A]" />
    <span className="text-[#E7C56A] text-[10px]">❖</span>
    {text ? (
      <span className="font-devanagari text-xs sm:text-sm font-bold tracking-widest text-[#FFF1D0] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
        {text}
      </span>
    ) : (
      <LotusMotif size={18} className="text-[#E7C56A]" />
    )}
    <span className="text-[#E7C56A] text-[10px]">❖</span>
    <span className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent via-[#D4AF5A]/50 to-[#E7C56A]" />
  </div>
);

// 5. Authentic Flickering Brass Diya using the uploaded real diya asset
export const TempleDiya: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size = "md", className = "" }) => {
  const widthClasses = {
    sm: "w-10 sm:w-11",
    md: "w-14 sm:w-16",
    lg: "w-20 sm:w-24",
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Warm breathing golden flame radiance / light glow */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.6)_0%,_rgba(234,88,12,0.3)_45%,_transparent_75%)] blur-md animate-pulse pointer-events-none" />

      {/* Real Diya Visual Asset */}
      <img
        src="/images/decorations/temple-diya.png"
        alt="Sacred Temple Diya"
        className={`${widthClasses[size]} h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)] transition-transform`}
        loading="lazy"
      />

      {/* Dynamic flame flicker overlay */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-2 h-3.5 bg-gradient-to-t from-transparent via-[#FEF3C7]/40 to-transparent rounded-full blur-[1px] animate-flame pointer-events-none" />
    </div>
  );
};

// Backwards compatibility alias for DiyaFlame
export const DiyaFlame = TempleDiya;

// 6. Authentic Hanging Temple Bell with chain movement using the uploaded bell asset
export const TempleBell: React.FC<{
  index?: 1 | 2 | 3 | 4;
  height?: number | string;
  className?: string;
  delay?: number;
}> = ({ index = 1, height = "h-24 sm:h-28", className = "", delay = 0 }) => {
  const bellImg = `/images/decorations/bell-${index}.png`;

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        transformOrigin: "top center",
        animation: `bell-natural-swing ${3.2 + (index % 3) * 0.4}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <img
        src={bellImg}
        alt={`Temple Bell ${index}`}
        className={`${typeof height === "string" ? height : `h-[${height}px]`} w-auto object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.8)]`}
      />
    </div>
  );
};

// Full 4-bell row across the top of temple screens using the supplied asset
export const TempleBellRow: React.FC<{ className?: string; height?: string }> = ({
  className = "",
  height,
}) => (
  <div className={`w-full flex justify-between items-start pointer-events-none px-2 sm:px-4 ${className}`}>
    <TempleBell index={1} height={height || "h-32 sm:h-40"} delay={0} />
    <TempleBell index={2} height={height ? "h-26 sm:h-32" : "h-28 sm:h-34"} delay={0.6} />
    <div className="flex-1" />
    <TempleBell index={3} height={height ? "h-26 sm:h-32" : "h-28 sm:h-34"} delay={1.2} />
    <TempleBell index={4} height={height || "h-32 sm:h-40"} delay={0.4} />
  </div>
);


