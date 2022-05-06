import React from "react";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import { CrewBg } from "../components/crew.styled";
const Crew = () => {
  return (
    <CrewBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      Crew
    </CrewBg>
  );
};

export default Crew;
