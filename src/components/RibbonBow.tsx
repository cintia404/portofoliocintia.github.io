import React from 'react';

interface RibbonBowProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const RibbonBow: React.FC<RibbonBowProps> = ({
  className = '',
  size = 100,
  glow = false,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300 filter ${
        glow ? 'drop-shadow-[0_0_12px_rgba(255,182,193,0.8)]' : 'drop-shadow-[0_4px_8px_rgba(244,143,177,0.3)]'
      }`}
      aria-hidden="true"
    >
      <defs>
        {/* Soft Satin Pink Gradients */}
        <linearGradient id="bowLoopLeftGrad" x1="45" y1="20" x2="10" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff3f5" />
          <stop offset="25%" stopColor="#ffa6c9" />
          <stop offset="70%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#d81b60" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="bowLoopRightGrad" x1="55" y1="20" x2="90" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff3f5" />
          <stop offset="25%" stopColor="#ffa6c9" />
          <stop offset="70%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#d81b60" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="bowKnotGrad" x1="45" y1="25" x2="55" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff8f9" />
          <stop offset="30%" stopColor="#ffb2d1" />
          <stop offset="100%" stopColor="#c2185b" />
        </linearGradient>

        <linearGradient id="tailLeftGrad" x1="40" y1="35" x2="15" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8da1" />
          <stop offset="40%" stopColor="#ffa6c9" />
          <stop offset="85%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#ad1457" />
        </linearGradient>

        <linearGradient id="tailRightGrad" x1="60" y1="35" x2="85" y2="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8da1" />
          <stop offset="40%" stopColor="#ffa6c9" />
          <stop offset="85%" stopColor="#f48fb1" />
          <stop offset="100%" stopColor="#ad1457" />
        </linearGradient>

        {/* Gloss Highlight Gradients for shiny satin effect */}
        <linearGradient id="glossGrad" x1="50" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* LEFT RIBBON TAIL */}
      <path
        d="M 46 38 C 42 42, 35 46, 30 52 C 22 60, 15 70, 15 76 C 15 78, 18 78, 22 75 C 27 71, 33 65, 38 58 C 41 53, 44 48, 47 42 Z"
        fill="url(#tailLeftGrad)"
      />
      
      {/* RIGHT RIBBON TAIL */}
      <path
        d="M 54 38 C 58 42, 65 46, 70 52 C 78 60, 85 70, 85 76 C 85 78, 82 78, 78 75 C 73 71, 67 65, 62 58 C 59 53, 56 48, 53 42 Z"
        fill="url(#tailRightGrad)"
      />

      {/* LEFT LOOP */}
      <path
        d="M 48 35 C 42 22, 28 12, 16 16 C 6 20, 8 38, 20 42 C 30 45, 42 40, 46 36 Z"
        fill="url(#bowLoopLeftGrad)"
        stroke="#ffa6c9"
        strokeWidth="0.5"
      />
      {/* Left loop gloss highlight */}
      <path
        d="M 38 23 C 32 16, 22 14, 16 17 C 12 19, 11 25, 17 28"
        stroke="url(#glossGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* RIGHT LOOP */}
      <path
        d="M 52 35 C 58 22, 72 12, 84 16 C 94 20, 92 38, 80 42 C 70 45, 58 40, 54 36 Z"
        fill="url(#bowLoopRightGrad)"
        stroke="#ffa6c9"
        strokeWidth="0.5"
      />
      {/* Right loop gloss highlight */}
      <path
        d="M 62 23 C 68 16, 78 14, 84 17 C 88 19, 89 25, 83 28"
        stroke="url(#glossGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* CENTER KNOT */}
      <rect
        x="44"
        y="28"
        width="12"
        height="15"
        rx="6"
        fill="url(#bowKnotGrad)"
        stroke="#ffa6c9"
        strokeWidth="0.5"
      />
      {/* Center knot fold highlights */}
      <path
        d="M 45 34 C 47 31, 53 31, 55 34"
        stroke="#fff"
        strokeWidth="0.75"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 46 38 C 48 41, 52 41, 54 38"
        stroke="#d81b60"
        strokeWidth="0.75"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};
