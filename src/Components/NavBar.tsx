import * as React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { COLORS, FONTS } from "../GLOBAL";
import { Link } from "react-router-dom";

const styles = {
  appBar: {
    bgcolor: "main",
  },
  toolbar: {
    justifyContent: "center",
    gap: 4,
    overflowX: "auto",
    overflowY: "hidden",
    maxHeight: 100,
    whiteSpace: "nowrap",
    "@media (max-width: 600px)": {
      justifyContent: "flex-start",
    },
  },
  button: {
    textTransform: "none",
  },
};

const NavBar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experiences", path: "/experiences" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.DarkBackground,
        contrastText: COLORS.White,
      },
    },
    typography: {
      fontFamily: FONTS.JetBrains,
      fontSize: 18,
      fontWeightMedium: "normal",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {pages.map((page) => (
            <Button
              key={page.name}
              color="inherit"
              sx={styles.button}
              component={Link}
              to={page.path}
            >
              {page.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
