import { useState } from "react";
import {
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";
import swiftconnect from "../Assets/swiftconnect.svg";
import ubisoft from "../Assets/Ubisoft.svg";
import giro from "../Assets/giro.svg";
import emsb from "../Assets/EMSB.svg";
import iRespite from "../Assets/iRespite.svg";
import work from "../Assets/work-office.svg";
import video from "../Assets/film-projector.svg";
import server from "../Assets/Web-server.svg";
import sql from "../Assets/postgresql.svg";
import robot from "../Assets/robot.svg";
import codejam from "../Assets/codeJam.svg";
import swim from "../Assets/swimming.svg";
import thinking from "../Assets/Thinking.svg";
import BoxContainer from "../Components/BoxContainer";
import { COLORS, FONTS } from "../GLOBAL";
import { ExperienceItem, ExperienceDescription } from "../Components";
import { MdClose } from "react-icons/md";

interface ExperienceItem {
  title: string;
  source: string;
  logo: any;
  date: string;
  subject?: string;
}
const ExperienceScreen = () => {
  const titles = ["Internships/Jobs", "Projects", "Volunteer"];

  const dataArray: ExperienceItem[][] = [
    [
      {
        title: "Front-end developer intern",
        source: "swiftconnect",
        logo: swiftconnect,
        date: "May 2023-Sep 2023",
      },
      {
        title: "Online programmer intern",
        source: "ubisoft",
        logo: ubisoft,
        date: "May 2022-Sep 2022",
      },
      {
        title: "Software developer intern",
        source: "giro",
        logo: giro,
        date: "Jan 2022-May 2022",
      },
      {
        title: "Tutor/TA",
        source: "emsb",
        logo: emsb,
        date: "Mar 2021-Sep 2021",
      },
    ],
    [
      {
        title: "iRespite",
        date: "Jan 2023-Dec 2023",
        logo: iRespite,
        source: "irespite",
      },
      {
        title: "Portfolio Blog",
        date: "Dec 2023",
        logo: work,
        source: "portfolio",
      },
      {
        title: "Dashcam video analysis",
        date: "Dec 2023",
        logo: video,
        source: "dashcam",
      },
      {
        title: "Basic web server",
        date: "Sep 2023",
        logo: server,
        source: "server",
      },
      {
        title: "Simple database",
        date: "Mar 2023",
        logo: sql,
        source: "database",
      },
      {
        title: "Mosaic robot",
        date: "Dec 2022",
        logo: robot,
        source: "robot",
      },
    ],
    [
      {
        title: "Codejam committee",
        date: "May 2020-Sep 2022",
        logo: codejam,
        source: "codejam",
      },
      {
        title: "S.W.A.M Instructor",
        date: "Sep 2019 - Sep 2022",
        logo: swim,
        source: "swam",
      },
      {
        title: "Mcgill Orientation staff",
        date: "Aug 2020",
        logo: thinking,
        source: "mcgill",
      },
    ],
  ];

  const [selectedItems, setSelectedItems] = useState<ExperienceItem[]>([]);

  const handleViewMoreClick = (item: ExperienceItem) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
  };

  const handleCloseDialog = (item: ExperienceItem) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter(
        (selectedItem) => selectedItem.source !== item.source
      )
    );
  };

  const heightCalc = (index: number) => {
    const i = dataArray[index].length;
    const n = Math.floor(i / 3);
    if (i % 3 === 0) {
      return 100 / n;
    } else {
      return 100 / (n + 1);
    }
  };

  return (
    <>
      <Grid container marginTop={8} paddingLeft={4}>
        {titles.map((title, titleIndex) => (
          <Grid item xs={12} sx={styles.grid} key={titleIndex}>
            <BoxContainer
              bgcolor={COLORS.DodgerBlue}
              customSx={{ marginTop: 4, marginBottom: 4 }}
            >
              <div style={styles.title}>{title}</div>
            </BoxContainer>
            <Grid container>
              {dataArray[titleIndex].map((item, index) => (
                <Grid
                  item
                  xs={4}
                  sx={{
                    ...styles.grid,
                    height: `${heightCalc(titleIndex)}%`,
                  }}
                  key={index}
                >
                  <ExperienceItem
                    key={index}
                    imageSrc={item.logo}
                    date={item.date}
                    onViewMoreClick={() => handleViewMoreClick(item)}
                    title={item.title}
                  />
                  {selectedItems.some(
                    (selectedItem) => selectedItem.source === item.source
                  ) && (
                    <Dialog
                      open={selectedItems.some(
                        (selectedItem) => selectedItem.source === item.source
                      )}
                      onClose={() => handleCloseDialog(item)}
                      scroll={"paper"}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                      PaperProps={{
                        sx: {
                          borderRadius: 6,
                          backgroundColor: "#3A92FA",
                        },
                      }}
                    >
                      <DialogTitle
                        id="scroll-dialog-title"
                        alignSelf={"center"}
                        sx={{
                          fontFamily: FONTS.JetBrains,
                          fontSize: "1.5vw",
                          fontWeight: "2.5vw",
                        }}
                      >
                        {item.title}
                      </DialogTitle>
                      <DialogContent dividers>
                        <DialogContentText id="scroll-dialog-description">
                          <ExperienceDescription name={item.source} />
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions sx={{ marginRight: 2 }}>
                        <Button
                          onClick={() => handleCloseDialog(item)}
                          sx={{ color: COLORS.Black }}
                          variant="contained"
                          endIcon={<MdClose />}
                        >
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  )}
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
    marginBottom: 2,
  },
  date: {
    color: COLORS.Black,
    fontSize: "1.4vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "500",
  },
  randomText: {
    color: COLORS.White,
    fontSize: "1.6vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "500",
    padding: "16px",
  },
  title: {
    color: COLORS.White,
    fontSize: "1.9vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "700",
    margin: 8,
    paddingInline: 24,
  },
};

export default ExperienceScreen;
