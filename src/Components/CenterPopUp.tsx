import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import BoxContainer from "./BoxContainer";
import { COLORS } from "../GLOBAL";

interface ICC {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const CenterPopUp: React.FC<ICC> = ({
  width = "inherit",
  height = "auto",
  children,
}) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const sequenceAnimation = async () => {
    await controls1.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });

    await controls2.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });

    await controls3.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });

    await controls4.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    });
  };

  useEffect(() => {
    sequenceAnimation();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 63 174"
        fill="none"
      >
        <motion.path
          key="path1"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls1}
          d="M47 17.6379C47 27.1577 40.1206 34.7759 31.75 34.7759C23.3794 34.7759 16.5 27.1577 16.5 17.6379C16.5 8.11818 23.3794 0.5 31.75 0.5C40.1206 0.5 47 8.11818 47 17.6379Z"
          fill={COLORS.DodgerBlue}
          stroke="#3A92FA"
        />
        <motion.ellipse
          key="ellipse1"
          cx="32.3871"
          cy="69.3103"
          rx="24.3871"
          ry="27.3103"
          fill={COLORS.DodgerBlue}
          initial={{ opacity: 0, scale: 0 }}
          animate={controls2}
        />
        <motion.ellipse
          key="ellipse2"
          cx="31.5"
          cy="138.276"
          rx="31.5"
          ry="35.2759"
          fill={COLORS.DodgerBlue}
          initial={{ opacity: 0, scale: 0 }}
          animate={controls3}
        />
      </motion.svg>
      <motion.div animate={controls4} initial={{ opacity: 0, scale: 0 }}>
        <BoxContainer bgcolor={COLORS.DodgerBlue}>{children}</BoxContainer>
      </motion.div>
    </div>
  );
};

export default CenterPopUp;
