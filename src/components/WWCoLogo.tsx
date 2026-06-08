import React from "react";

interface WWCoLogoProps {
  className?: string;
  height?: number; // fallback/override if needed
}

export const WWCoLogo: React.FC<WWCoLogoProps> = ({ className = "", height }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWhXjd06foI7R8p5USfYl0yvNMWD-PQYzPaIA7IVBRPIzo5-N_i0MntdARZxNYoA2CNw0RI_onL9aA7SqfcSRAwZH_gnLMOTg3ei3FcrVjIE_jvZ_yZtXCw5Zrf_ii0IV16vPSFahw7Maz-6Oh8dWpo5XwemyVfNw9t_SaHKBRnfzLO5uYGwDG6eaW8mJHP3wVGu7_pulek-95-ZsMUeIr4NCKEW9-RHdBl1s6kF1mkN5UyyEZayxNwlaG4fRWX01znfjAB4b_XYk"
        alt="WWCo Logo"
        referrerPolicy="no-referrer"
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          height ? "" : "h-[28px] md:h-[35px]"
        }`}
        style={height ? { height: `${height}px` } : undefined}
      />
    </div>
  );
};
