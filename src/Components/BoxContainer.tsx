import * as React from "react";
import { Box } from "@mui/material";
import { COLORS } from "../GLOBAL";

interface BoxContainerProps {
  height?: string;
  width?: string;
  bgcolor: string | COLORS;
  children?: React.ReactNode;
  customSx?: React.CSSProperties;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  height = "inherit",
  width = "inherit",
  bgcolor,
  children,
  customSx,
}) => {
  return (
    <Box
      sx={{
        bgcolor: bgcolor,
        height: height,
        width: width,
        padding: 0,
        margin: 0,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...customSx,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
