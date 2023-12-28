import React from "react";
import FooterWave from "./FooterWave";

interface Styles {
  [key: string]: React.CSSProperties;
}

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerContent}>
        <div style={{ ...styles.container, ...{ width: 170, left: 92 } }}>
          <span style={{ ...styles.text, ...styles.textMain }}>
            Navigation
            <br />
          </span>
          <span style={{ ...styles.text, ...styles.textSub }}>
            Home
            <br />
            About
            <br />
            Education
            <br />
            Experience
            <br />
            Contact
          </span>
        </div>
        <div
          style={{
            ...styles.container,
            ...{
              width: 206,
              height: 153,
              left: 307,
            },
          }}
        >
          <span style={{ ...styles.text, ...styles.textMain }}>
            Social media
            <br />
          </span>
          <span style={{ ...styles.text, ...styles.textSub }}>
            LinkedIn
            <br />
            Website
            <br />
            Facebook
            <br />
            Instagram
          </span>
        </div>
      </div>
      {/* <FooterWave style={styles.footerWave} /> */}
    </div>
  );
};

const styles: Styles = {
  footerContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  footerContent: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderTop: "2px white solid",
  },
  container: {
    position: "absolute",
    top: 12,
    lineHeight: 1.5,
  },
  text: {
    fontFamily: "JetBrains Mono",
    wordWrap: "break-word",
  },
  textMain: {
    color: "white",
    fontSize: "18px",
    fontWeight: 600,
  },
  textSub: {
    color: "rgba(255, 255, 255, 0.70)",
    fontSize: "16px",
    fontWeight: 400,
  },
  footerWave: {
    position: "absolute",
    bottom: -160,
  },
};

export default Footer;
