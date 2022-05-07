import React from "react";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import {
  TechnologyBg,
  TechnologyContainer,
  TechnologyContent,
  TechnologyDescription,
  TechnologyHeader,
  TechnologyImage,
  TechnologyName,
  TechnologySelect,
  TechnologySelectContainer,
  TechnologyTitle,
} from "../components/technology.styled";
import data from "../data.json";
import { useState } from "react";

const Technology = () => {
  const [technology, setTechnology] = useState(data.technology[0]);

  return (
    <TechnologyBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      <TechnologyHeader>
        <p>03</p>SPACE LAUNCH 101
      </TechnologyHeader>
      <TechnologyContainer>
        <TechnologyImage
          src={require(`../assets/${technology.images.landscape}`)}
          alt="technology image"
        />
        <TechnologyContent>
          <TechnologySelectContainer>
            <TechnologySelect>1</TechnologySelect>
            <TechnologySelect>2</TechnologySelect>
            <TechnologySelect>3</TechnologySelect>
          </TechnologySelectContainer>
          <TechnologyTitle>The Terminology...</TechnologyTitle>
          <TechnologyName>{technology.name}</TechnologyName>
          <TechnologyDescription>
            {technology.description}
          </TechnologyDescription>
        </TechnologyContent>
      </TechnologyContainer>
    </TechnologyBg>
  );
};

export default Technology;
