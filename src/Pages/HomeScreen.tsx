import * as React from "react";
import { COLORS, FONTS } from "../GLOBAL";
import BoxContainer from "../Components/BoxContainer";
import { Box, Typography, Button } from "@mui/material";
import developerImage from "../Assets/girl-code.svg";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../Components/LeftArrow";
import RightArrow from "../Components/RightArrow";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleExperienceClick = () => {
    navigate("/experiences");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <BoxContainer width="50vw" bgcolor={COLORS.DodgerBlue}>
          <Typography sx={styles.title}>
            Front-end developer <br />
            based in Montreal
          </Typography>
          <Typography sx={styles.description}>
            A dedicated web and mobile app front-end <br />
            developer, specialized in TypeScript/JavaScript, <br />
            React, and React Native. With a passion for UI design, <br />I love
            creating interactive and user-friendly wireframes.
          </Typography>{" "}
          <div
            style={{
              ...styles.container,
              columnGap: 100,
              justifyContent: "space-around",
            }}
          >
            <LeftArrow />

            <RightArrow />
          </div>
          <div style={styles.container}>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={handleAboutClick}
            >
              About me
            </Button>
            <Button
              variant="contained"
              sx={styles.button}
              onClick={handleExperienceClick}
            >
              Experience
            </Button>
          </div>
          {/* <div style={styles.imageContainer}> */}
          <img src={developerImage} alt="Developer" style={styles.image} />
          {/* </div> */}
        </BoxContainer>
      </Box>
    </>
  );
};

const styles = {
  title: {
    marginTop: 4,
    fontSize: 36,
    fontFamily: FONTS.JetBrains,
    fontWeight: 800,
    color: COLORS.White,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: FONTS.JetBrains,
    fontWeight: 400,
    color: COLORS.White,
    textAlign: "center",
    width: "50%",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "center",
  },
  button: {
    background: COLORS.Orange,
    color: COLORS.White,
    fontSize: "1.2vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "700",
    borderRadius: 25,
    margin: "10px 50px",
    padding: "6px 28px",
    textTransform: "none",
  },
  image: {
    height: "80%",
    padding: 16,
  },
};

export default HomeScreen;
