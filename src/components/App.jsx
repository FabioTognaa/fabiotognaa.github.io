import { useState } from "react";
import HomeSection from "./sections/HomeSection";
import AboutMeSection from "./sections/AboutMeSection";
import SkillSection from "./sections/SkillSection";
import StudySection from "./sections/StudySection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <StudySection />
      <SkillSection />
      <ContactSection />
    </>
  );
}

export default App;
