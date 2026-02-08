export const BrainVisual = () => {
  return (
    <div className="relative w-[520px] h-[520px] flex items-center justify-center">

      {/* soft background glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-[#EAB308]/10 blur-[140px]" />

      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ORBIT RINGS */}
        <ellipse
          cx="300"
          cy="300"
          rx="250"
          ry="150"
          stroke="#EAB308"
          strokeOpacity="0.25"
          strokeWidth="1.6"
          className="orbit"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="170"
          ry="250"
          stroke="#EAB308"
          strokeOpacity="0.18"
          strokeWidth="1.4"
          className="orbit orbit-2"
        />

        {/* CENTER SPLIT */}
        <path
          d="M300 160 L300 440"
          stroke="#EAB308"
          strokeOpacity="0.35"
          strokeWidth="1.4"
          strokeDasharray="6 6"
        />

        {/* LEFT HEMISPHERE */}
        <path
          d="
          M300 180
          C220 150, 150 220, 170 310
          C190 390, 260 430, 300 420
          "
          stroke="#EAB308"
          strokeWidth="2.6"
          strokeOpacity="0.95"
          fill="none"
          className="brain-line"
        />

        {/* RIGHT HEMISPHERE */}
        <path
          d="
          M300 180
          C380 150, 450 220, 430 310
          C410 390, 340 430, 300 420
          "
          stroke="#EAB308"
          strokeWidth="2.6"
          strokeOpacity="0.95"
          fill="none"
          className="brain-line delay"
        />

        {/* FOLDS LEFT */}
        <path
          d="M260 220 C230 240, 230 280, 260 300"
          stroke="#EAB308"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M240 300 C220 330, 240 360, 270 370"
          stroke="#EAB308"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          fill="none"
        />

        {/* FOLDS RIGHT */}
        <path
          d="M340 220 C370 240, 370 280, 340 300"
          stroke="#EAB308"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M360 300 C380 330, 360 360, 330 370"
          stroke="#EAB308"
          strokeOpacity="0.6"
          strokeWidth="1.8"
          fill="none"
        />

        {/* NODES */}
        <circle cx="260" cy="260" r="4" fill="#EAB308" className="node" />
        <circle cx="340" cy="260" r="4" fill="#EAB308" className="node delay2" />
        <circle cx="300" cy="330" r="4" fill="#EAB308" className="node delay3" />
      </svg>
    </div>
  );
};
