import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import BoxContainer from "./BoxContainer";
import { COLORS } from "../GLOBAL";

interface ILC {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const LeftPopUp: React.FC<ILC> = ({
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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <motion.svg
        width={width}
        //height={height}
        viewBox="0 0 126 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "fit-content" }}
      >
        <motion.path
          key="path1"
          d="M31 17.6379C31 27.1577 24.1206 34.7759 15.75 34.7759C7.37938 34.7759 0.5 27.1577 0.5 17.6379C0.5 8.11818 7.37938 0.5 15.75 0.5C24.1206 0.5 31 8.11818 31 17.6379Z"
          fill="#3A92FA"
          stroke="#3A92FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls1}
        />
        <motion.ellipse
          key="ellipse1"
          cx="43.6937"
          cy="59.1724"
          rx="24.3871"
          ry="27.3103"
          fill="#3A92FA"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls2}
        />
        <motion.ellipse
          key="ellipse2"
          cx="94.5"
          cy="96.7241"
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

export default LeftPopUp;
