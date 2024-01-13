import BoxContainer from "../Components/BoxContainer";
import CenterPopUp from "../Components/CenterPopUp";
import { COLORS, FONTS } from "../GLOBAL";
import mcgill from "../Assets/Mcgill.svg";
import { Button } from "@mui/material";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { useState } from "react";

const EducationScreen = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        marginTop: 54,
      }}
    >
      <BoxContainer width="40%" bgcolor={COLORS.DodgerBlue}>
        <img
          src={mcgill}
          width="70%"
          style={{ margin: 30, alignSelf: "center" }}
        ></img>
        <Button
          endIcon={<FaRegFaceGrinStars />}
          variant="contained"
          onClick={handleClick}
          sx={{
            background: COLORS.Orange,

            marginBottom: 2,
            "&:hover": { background: COLORS.Orange },
          }}
        >
          Want to know more?
        </Button>
      </BoxContainer>
      {showMore && (
        <div style={{ margin: 12 }}>
          <CenterPopUp width={"3vw"}>
            <div style={styles.container}>
              <BoxContainer bgcolor={COLORS.Orange} width="70%">
                <div style={styles.spanText}>
                  <span style={styles.title}>
                    Degree
                    <br />
                  </span>
                  <span style={styles.text}>
                    Bachelor of software engineering
                    <br />
                    Department of electrical, computer and software engineering
                    <br />
                    Mcgill University
                    <br />
                    CGPA:3.4/4
                  </span>
                </div>
              </BoxContainer>
              <BoxContainer bgcolor={COLORS.Orange} width="70%">
                <div style={styles.spanText}>
                  <span style={styles.title}>
                    Scholorships & bursaries
                    <br />
                  </span>
                  <span style={styles.text}>
                    J W McConnell Scholarship
                    <br />
                    Charles Michael Morssen Bursary
                    <br />
                    Clifford Knowles Bursary
                    <br />
                    William & Nona Heaslip Schol
                  </span>
                </div>
              </BoxContainer>
            </div>
          </CenterPopUp>
        </div>
      )}
      <></>
    </div>
  );
};

const styles = {
  title: {
    margin: 4,
    color: COLORS.White,
    fontSize: 24,
    fontFamily: FONTS.JetBrains,
    fontWeight: "600",
  },
  text: {
    color: COLORS.White,
    fontSize: 18,
    fontFamily: FONTS.JetBrains,
    fontWeight: "500",
    lineHeight: 1.5,
  },
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  spanText: {
    textAlign: "center" as const,
    margin: 8,
  },
};
export default EducationScreen;
