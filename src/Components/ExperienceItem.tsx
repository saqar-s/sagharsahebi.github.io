import * as React from "react";
import { Grid, Button, Box } from "@mui/material";
import BoxContainer from "../Components/BoxContainer";
import { COLORS } from "../GLOBAL";
import ExperienceDescription from "./ExperienceDescription";
import LeftPopUp from "./LeftPopUP";
import CenterPopUp from "./CenterPopUp";
import RightPopUp from "./RightPopUp";

interface ExperienceItemProps {
  imageSrc: string;
  date: string;
  onViewMoreClick: () => void;
  title: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  imageSrc,
  date,
  onViewMoreClick,
  title,
}) => {
  return (
    <>
      <BoxContainer
        bgcolor={COLORS.Orange}
        width="50%"
        height="100%"
        customSx={{
          justifyContent: "space-between",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <img
          src={imageSrc}
          width="50%"
          height="50%"
          style={{ marginTop: 4, marginBottom: 2 }}
        />
        <div style={styles.title}>{title}</div>
        <div style={styles.date}>{date}</div>
        <Button onClick={onViewMoreClick} sx={styles.button}>
          View More
        </Button>
      </BoxContainer>
    </>
  );
};
const styles = {
  date: {
    color: COLORS.Black,
    fontSize: "1.1vw",
    fontFamily: "JetBrains Mono",
  },
  title: {
    color: COLORS.DodgerBlue,
    fontSize: "1.4vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "500",
  },
  button: {
    //margin: 8,
    fontSize: "1vw",
    color: COLORS.Black,
    textTransform: "none",
    textDecoration: "underline",
  },
};
export default ExperienceItem;
