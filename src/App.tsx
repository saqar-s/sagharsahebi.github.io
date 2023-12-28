import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomeSrceen from "./Pages/HomeScreen";
import { COLORS } from "./GLOBAL";
import AboutScreen from "./Pages/AboutScreen";
import Footer from "./Components/Footer";
import SkillsScreen from "./Pages/SkillsScreen";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeSrceen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
