import * as React from "react";
import { Button } from "@mui/material";
import BoxContainer from "./BoxContainer";
import { COLORS } from "../GLOBAL";

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
        <img src={imageSrc} width="50%" height="50%" style={styles.image} />
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
    fontSize: "1vw",
    color: COLORS.Black,
    textTransform: "none",
    textDecoration: "underline",
  },
  image: {
    marginTop: 4,
    marginBottom: 2,
  },
};
export default ExperienceItem;
