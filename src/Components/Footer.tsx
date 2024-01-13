import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface Styles {
  [key: string]: React.CSSProperties;
}

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const [hoveredLink, setHoveredLink] = useState("");

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink("");
  };

  const generateLinkStyle = (link: string) => ({
    color: "rgba(255, 255, 255, 0.70)",
    textDecoration: "none",
    fontWeight: hoveredLink === link ? 600 : 400,
    transition: "font-weight 0.3s",
  });

  const links = [
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/saghar-sahebi-5628051b1/",
    },
    { text: "Github", url: "https://github.com/saqar-s" },
    { text: "Facebook", url: "https://www.facebook.com/saghar.sahebi.7" },
  ];

  const navigationLinks = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "Skills", url: "/skills" },
    { text: "Experience", url: "/experiences" },
    { text: "Education", url: "/education" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div style={{ ...styles.footerContainer }}>
      <div style={styles.footerContent}>
        <div
          style={{
            ...styles.container,
            ...{ width: 170, left: 92 },
          }}
        >
          <span style={{ ...styles.text, ...styles.textMain }}>
            Navigation
            <br />
          </span>
          <span style={{ ...styles.text, ...styles.textSub }}>
            {navigationLinks.map((link) => (
              <>
                <Link
                  key={link.text}
                  to={link.url}
                  style={generateLinkStyle(link.text)}
                  onMouseEnter={() => handleMouseEnter(link.text)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.text}
                </Link>
                <br key={`br-${link}`} />
              </>
            ))}
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
            Social Media
            <br />
          </span>
          <span style={{ ...styles.text, ...styles.textSub }}>
            {links.map((linkObject) => (
              <React.Fragment key={linkObject.text}>
                <a
                  rel="noopener noreferrer"
                  href={linkObject.url}
                  style={generateLinkStyle(linkObject.text)}
                  onMouseEnter={() => handleMouseEnter(linkObject.text)}
                  onMouseLeave={handleMouseLeave}
                >
                  {linkObject.text}
                </a>
                <br />
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles: Styles = {
  footerContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    marginBottom: 10,
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
    textDecoration: "none",
  },
  footerWave: {
    position: "absolute",
    bottom: -160,
  },
};

export default Footer;
