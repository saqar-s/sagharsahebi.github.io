import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { BoxContainer } from "../Components/";
import { COLORS, FONTS } from "../GLOBAL";
import image1 from "../Assets/pic1.png";
import image2 from "../Assets/pic2.png";

const AboutScreen = () => {
  return (
    <Box sx={styles.main}>
      <Grid container marginY={8} paddingLeft={4} rowGap={20}>
        <Grid item xs={6}>
          <div style={styles.container}>
            <div style={styles.circle} />
            <img style={styles.image} src={image1} alt="Your Alt Text" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={styles.container}>
            <BoxContainer width="auto" height="auto" bgcolor={COLORS.Orange}>
              <Typography sx={styles.title}>Who am I?</Typography>
              <Typography sx={styles.description}>
                I am Saghar Sahebi, a 23 y/o passionate front-end developer and
                UI/UX designer in my last year of studies in software
                engineering at McGill University. Coding and designing is not my
                only passion! I am super active and love doing sports like
                swimming, cycling and skiing. I also have a more nerdy side that
                loves doing puzzles and sudokus:) Finally I adore teaching and
                working with kids which is why i tutor kids with special needs.
              </Typography>
            </BoxContainer>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ alignContent: "center", justifyContent: "center" }}
        >
          <div style={styles.container}>
            <BoxContainer width="auto" height="auto" bgcolor={COLORS.Orange}>
              <Typography sx={styles.title}>Why Front-end? </Typography>
              <Typography sx={styles.description}>
                My journey started after my first internship at Giro where i
                prepared multiple PowerBI reports and the visuals really
                attracted me and so I persued to take a front-end developer
                intern role at Ubisoft the following summer. My passion for
                creating interactive and user friendly designs and websites grew
                more and more. For my Capestone i also chose a mobile
                application development project where my team and i started the
                project from scratch by designing the wireframes and developing
                the front-end in React-native. And finally to learn more I
                completed an internship as a front-end developer at
                Swiftconnect.
              </Typography>
            </BoxContainer>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={styles.container}>
            <div style={styles.circle} />
            <img style={styles.image} src={image2} alt="Your Alt Text" />
          </div>
        </Grid>
      </Grid>{" "}
    </Box>
  );
};
const styles = {
  title: {
    marginTop: 2,
    fontSize: "2vw",
    fontFamily: FONTS.JetBrains,
    fontWeight: 800,
    color: COLORS.White,
    textAlign: "center",
  },
  description: {
    fontSize: "1.1vw",
    fontFamily: FONTS.JetBrains,
    fontWeight: 400,
    color: COLORS.White,
    textAlign: "center",
    width: "80%",
    marginBottom: 2,
    lineHeight: "32px",
    wordWrap: "break-word",
  },
  container: {
    width: "90%",
    height: "90%",
    position: "relative" as const,
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    aspectRatio: 1 / 1,
    left: "30%",
    position: "absolute" as const,
    borderRadius: "50%",
  },
  circle: {
    width: "60%",
    aspectRatio: 1 / 1,
    position: "absolute" as const,
    background: COLORS.DodgerBlue,
    borderRadius: "50%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
};
export default AboutScreen;
