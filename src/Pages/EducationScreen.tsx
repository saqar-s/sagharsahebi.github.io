import BoxContainer from "../Components/BoxContainer";
import CenterPopUp from "../Components/CenterPopUp";
import { COLORS } from "../GLOBAL";
import mcgill from "../Assets/Mcgill.svg";
import { Button } from "@mui/material";
import { FaRegFaceGrinStars } from "react-icons/fa6";

const EducationScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <BoxContainer width="40%" bgcolor={COLORS.DodgerBlue}>
        <img
          src={mcgill}
          width="70%"
          style={{ margin: 30, alignSelf: "center" }}
        ></img>
        <Button
          endIcon={<FaRegFaceGrinStars />}
          variant="contained"
          sx={{
            background: COLORS.Orange,
            //marginTop: 6,
            marginBottom: 2,
            "&:hover": { background: COLORS.Orange },
          }}
        >
          {" "}
          Want to know more?
        </Button>
      </BoxContainer>
      <></>
    </div>
  );
};
export default EducationScreen;
