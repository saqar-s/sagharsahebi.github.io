import React from "react";
import { COLORS } from "../GLOBAL";

interface FooterWaveProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

const FooterWave: React.FC<FooterWaveProps> = ({
  width = "100vw",
  height = 60,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={style}
    >
      <path
        d="M0 8.46396L18.5 27.031C36.9 45.598 74 82.732 111 107.507C147.7 132.051 185 144.815 222 141.508C258.5 138.433 295 119.866 332 101.299C369.2 82.732 406 64.165 443 45.598C480 27.031 517 8.46396 554 5.3888C590.8 2.08155 628 14.8464 665 23.9558C701.5 33.4134 738 39.2156 775 33.2393C812.3 27.031 849 8.46396 886 2.25562C923.1 -3.72064 960 2.08155 997 20.8226C1033.8 39.2156 1071 70.5474 1108 67.2401C1144.6 64.165 1182 27.031 1218 17.7475C1255.4 8.46396 1292 27.031 1329 48.6731C1366.2 70.5474 1403 94.9166 1422 107.507L1440 119.866V157H0V8.46396Z"
        fill={COLORS.Orange}
      />
    </svg>
  );
};

export default FooterWave;
