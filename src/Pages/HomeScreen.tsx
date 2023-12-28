import * as React from "react";
import { COLORS, FONTS } from "../GLOBAL";
import BoxContainer from "../Components/BoxContainer";
import { Box, Typography, Button } from "@mui/material";
import developerImage from "../Assets/full-stack-developer.png";

const HomeScreen = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <BoxContainer height="90vh" width="90vw" bgcolor="#3A92FA">
          <Typography sx={styles.title}>
            Front-end developer <br />
            based in Montreal
          </Typography>
          <Typography sx={styles.description}>
            A dedicated web and mobile app front-end <br />
            developer, specialized in TypeScript/JavaScript, <br />
            React, and React Native. With a passion for UI design, <br />I love
            creating interactive and user-friendly wireframes.
          </Typography>
          <div style={styles.buttonContainer}>
            <Button variant="contained" sx={styles.button}>
              About me
            </Button>
            <Button variant="contained" sx={styles.button}>
              Experience
            </Button>
          </div>
          <div style={styles.imageContainer}>
            <img src={developerImage} alt="Developer" style={styles.image} />
          </div>
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
    marginBottom: 4,
    fontSize: 16,
    fontFamily: FONTS.JetBrains,
    fontWeight: 400,
    color: COLORS.White,
    textAlign: "center",
    width: "50%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row" as const,
  },
  button: {
    background: COLORS.Orange,
    color: COLORS.White,
    fontSize: 16,
    fontFamily: "JetBrains Mono",
    fontWeight: "700",
    borderRadius: 25,
    margin: "10px 50px",
    padding: "6px 28px",
    textTransform: "none",
  },
  imageContainer: {
    width: "55%",
    height: "auto",
  },
  image: {
    width: "100%", // Make the image fill the container
    height: "auto", // Maintain aspect ratio
    display: "block", // Remove extra space below the image
  },
};

export default HomeScreen;
