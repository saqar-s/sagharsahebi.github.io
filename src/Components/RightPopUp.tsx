import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import BoxContainer from "./BoxContainer";
import { COLORS } from "../GLOBAL";

interface IRC {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const RightPopUp: React.FC<IRC> = ({
  width = "inherit",
  height = "fit-content",
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
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <motion.svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127 134"
        fill="none"
        style={{ height: "fit-content" }}
      >
        <motion.path
          key="path1"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls1}
          d="M126 17.6379C126 27.1577 119.121 34.7759 110.75 34.7759C102.379 34.7759 95.5 27.1577 95.5 17.6379C95.5 8.11818 102.379 0.5 110.75 0.5C119.121 0.5 126 8.11818 126 17.6379Z"
          fill="#3A92FA"
          stroke="#3A92FA"
        />
        <motion.ellipse
          key="ellipse1"
          cx="82.3871"
          cy="60.3103"
          rx="24.3871"
          ry="27.3103"
          fill="#3A92FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls2}
        />
        <motion.ellipse
          key="ellipse2"
          cx="31.5"
          cy="98.2759"
          rx="31.5"
          ry="35.2759"
          fill="#3A92FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls3}
        />
      </motion.svg>
      <motion.div
        animate={controls4}
        initial={{ opacity: 0, scale: 0, height: "fit-content" }}
      >
        <BoxContainer
          bgcolor={COLORS.DodgerBlue}
          customSx={{ position: "relative", top: "inherit" }}
        >
          {children}
        </BoxContainer>
      </motion.div>
    </div>
  );
};

export default RightPopUp;
