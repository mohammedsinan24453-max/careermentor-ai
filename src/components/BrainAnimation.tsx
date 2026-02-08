export const BrainAnimation = () => {
  return (
    <div className="relative w-[420px] h-[420px]">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ===== ORBIT PATHS ===== */}
        <ellipse
          cx="250"
          cy="250"
          rx="200"
          ry="110"
          stroke="#EAB308"
          strokeOpacity="0.25"
          strokeWidth="1"
          className="orbit orbit-1"
        />
        <ellipse
          cx="250"
          cy="250"
          rx="140"
          ry="200"
          stroke="#EAB308"
          strokeOpacity="0.18"
          strokeWidth="1"
          className="orbit orbit-2"
        />

        {/* ===== BRAIN LINES ===== */}
        <path
          d="M140 240 C160 160, 240 140, 300 170 C360 200, 360 300, 290 330 C230 360, 160 320, 150 270"
          stroke="#EAB308"
          strokeOpacity="0.9"
          strokeWidth="1.2"
          fill="none"
          className="brain-line"
        />

        <path
          d="M170 260 C190 210, 260 210, 300 240 C330 270, 300 310, 260 320"
          stroke="#EAB308"
          strokeOpacity="0.6"
          strokeWidth="1"
          fill="none"
          className="brain-line delay"
        />

        {/* ===== NODES ===== */}
        <circle cx="220" cy="210" r="3" fill="#EAB308" className="node" />
        <circle cx="280" cy="260" r="3" fill="#EAB308" className="node delay2" />
        <circle cx="250" cy="300" r="3" fill="#EAB308" className="node delay3" />

      </svg>
    </div>
  );
};
