import { COLORS, FONTS } from "../GLOBAL";
import { Box, Typography, Button } from "@mui/material";
import developerImage from "../Assets/girl-code.svg";
import { useNavigate } from "react-router-dom";
import { LeftArrow, RightArrow, BoxContainer } from "../Components";

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
      <Box sx={styles.main}>
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
          <img src={developerImage} alt="Developer" style={styles.image} />
        </BoxContainer>
      </Box>
    </>
  );
};

const styles = {
  title: {
    marginTop: 4,
    fontSize: "2vw",
    fontFamily: FONTS.JetBrains,
    fontWeight: 800,
    color: COLORS.White,
    textAlign: "center",
  },
  description: {
    fontSize: "1vw",
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
    "&:hover": { background: COLORS.Orange },
  },
  image: {
    height: "75%",
    padding: 16,
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
};

export default HomeScreen;
