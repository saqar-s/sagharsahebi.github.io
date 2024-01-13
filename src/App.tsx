import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./Components";
import { COLORS } from "./GLOBAL";
import {
  AboutScreen,
  HomeScreen,
  SkillsScreen,
  ExperienceScreen,
  ContactScreen,
  EducationScreen,
} from "./Pages";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />
        <div style={styles.pageContainer}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/skills" element={<SkillsScreen />} />
            <Route path="/experiences" element={<ExperienceScreen />} />
            <Route path="/education" element={<EducationScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const styles = {
  pageContainer: {
    flex: 1,
  },
};
export default App;
