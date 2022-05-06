import React from "react";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import {
  CrewBg,
  CrewBio,
  CrewBottom,
  CrewContainer,
  CrewHeader,
  CrewImage,
  CrewName,
  CrewNav,
  CrewNavElement,
  CrewRole,
  CrewTop,
} from "../components/crew.styled";
import { useState } from "react";
import data from "../data.json";
const Crew = () => {
  const [person, setPerson] = useState(data.crew[0]);
  return (
    <CrewBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      <CrewContainer>
        <CrewHeader>
          <p>02</p>Meet your Crew
        </CrewHeader>
        <CrewTop>
          <CrewImage>
            <img src={require(`../assets/${person.images.png}`)} alt="person" />
          </CrewImage>
          <CrewNav>
            <CrewNavElement></CrewNavElement>
            <CrewNavElement></CrewNavElement>
            <CrewNavElement></CrewNavElement>
            <CrewNavElement></CrewNavElement>
          </CrewNav>
        </CrewTop>
        <CrewBottom>
          <CrewRole>{person.role}</CrewRole>
          <CrewName>{person.name}</CrewName>
          <CrewBio>{person.bio}</CrewBio>
        </CrewBottom>
      </CrewContainer>
    </CrewBg>
  );
};

export default Crew;
