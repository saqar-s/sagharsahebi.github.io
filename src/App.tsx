import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomeSrceen from "./Pages/HomeScreen";
import { COLORS } from "./GLOBAL";
import AboutScreen from "./Pages/AboutScreen";
import Footer from "./Components/Footer";
import SkillsScreen from "./Pages/SkillsScreen";
import ExperienceScreen from "./Pages/ExperienceScreen";
import ContactScreen from "./Pages/ContactScreen";
import EducationScreen from "./Pages/EducationScreen";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeSrceen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/experiences" element={<ExperienceScreen />} />
        <Route path="/education" element={<EducationScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
