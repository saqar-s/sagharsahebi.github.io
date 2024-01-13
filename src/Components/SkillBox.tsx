import { COLORS } from "../GLOBAL";
import { Typography } from "@mui/material";

interface SkillBoxProps {
  text: string;
  icon?: React.ReactNode;
  width?: string | number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text, icon, width = "80%" }) => {
  return (
    <div style={{ width: width, position: "relative" }}>
      <div
        style={{
          width: "70%",
          aspectRatio: 2.5 / 1,
          position: "absolute",
          background: COLORS.DodgerBlue,
          borderRadius: 25,
        }}
      />
      <div
        style={{
          width: "70%",
          aspectRatio: 2.5 / 1,
          left: "10%",
          top: 10,
          position: "absolute",
          background: COLORS.Orange,
          borderRadius: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={styles.description}> {text}</Typography>
        {icon}
      </div>
    </div>
  );
};
const styles = {
  description: {
    color: COLORS.Black,
    fontSize: "1.8vw",
    fontFamily: "JetBrains Mono",
    fontWeight: "800",
    wordWrap: "break-word",
  },
};
export default SkillBox;
