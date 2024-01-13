import * as React from "react";
import { Grid } from "@mui/material";
import SkillBox from "../Components/SkillBox";
import BoxContainer from "../Components/BoxContainer";
import { FaReact, FaFigma, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiMiro,
  SiPostman,
  SiFirebase,
  SiPowerbi,
  SiAzuredevops,
  SiFramer,
} from "react-icons/si";
import { COLORS } from "../GLOBAL";

const SkillsScreen = () => {
  const titles = [
    "Front-end",
    "Design",
    "Back-end/DB",
    "Other tools & software",
    "Languages",
  ];

  const dataArrays = [
    [
      { text: "React", icon: <FaReact size="2.2vw" /> },
      { text: "ReactNative", icon: <FaReact size="2.2vw" /> },
      { text: "Javascript", icon: <IoLogoJavascript size="2.2vw" /> },
      { text: "Typescript", icon: <BiLogoTypescript size="2.2vw" /> },
      { text: "HTML/CSS", icon: <FaReact size="2.2vw" /> },
    ],
    [
      { text: "Figma", icon: <FaFigma size="2.2vw" /> },
      { text: "Miro", icon: <SiMiro size="2.2vw" /> },
      { text: "LucidChart" },
    ],
    [
      { text: "Python", icon: <FaPython size="2.2vw" /> },
      { text: "Java", icon: <FaJava size="2.2vw" /> },
      { text: "Javascript", icon: <IoLogoJavascript size="2.2vw" /> },
      { text: "SQL", icon: <FaDatabase size="2.2vw" /> },
    ],
    [
      { text: "PowerBI", icon: <SiPowerbi size="2.2vw" /> },
      { text: "Firebase", icon: <SiFirebase size="2.2vw" /> },
      { text: "Azure", icon: <SiAzuredevops size="2.2vw" /> },
      { text: "Postman", icon: <SiPostman size="2.2vw" /> },
      { text: "FramerMotion", icon: <SiFramer size="2.2vw" /> },
    ],
    [{ text: "English" }, { text: "French" }, { text: "Farsi" }],
  ];

  return (
    <>
      <Grid container marginY={8} paddingLeft={4} rowGap={4}>
        {titles.map((title, titleIndex) => (
          <Grid item xs={12} sx={styles.grid} key={titleIndex}>
            <BoxContainer bgcolor={COLORS.DodgerBlue}>
              <div style={styles.title}>{title}</div>
            </BoxContainer>
            <Grid container>
              {dataArrays[titleIndex].map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={3}
                  sx={[styles.grid, { marginTop: 6, marginBottom: 18 }]}
                >
                  <SkillBox text={item.text} icon={item.icon} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const styles = {
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.White,
    fontSize: "1.9vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "800",
    margin: 8,
    paddingInline: 24,
  },
};

export default SkillsScreen;
