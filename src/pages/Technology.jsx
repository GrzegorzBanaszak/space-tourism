import React from "react";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import {
  TechnologyArticle,
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
import { useEffect } from "react";

const Technology = () => {
  const [technology, setTechnology] = useState(data.technology[0]);
  const [width, setWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowWidth);

    return () => {
      window.removeEventListener("resize", getWindowWidth);
    };
  }, []);
  const changeTechnology = (technologyName) => {
    const newTechnology = data.technology.find(
      (x) => x.name === technologyName
    );

    if (!newTechnology) return;

    setTechnology(newTechnology);
  };

  const isTechnologySelect = (technologyName) => {
    if (technology.name === technologyName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <TechnologyBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      <TechnologyHeader>
        <p>03</p>SPACE LAUNCH 101
      </TechnologyHeader>
      <TechnologyContainer>
        <TechnologyImage
          src={
            width > 1024
              ? require(`../assets/${technology.images.portrait}`)
              : require(`../assets/${technology.images.landscape}`)
          }
          alt="technology image"
        />
        <TechnologyContent>
          <TechnologySelectContainer>
            {data.technology.map((item, index) => (
              <TechnologySelect
                isActive={isTechnologySelect(item.name)}
                onClick={() => changeTechnology(item.name)}
                key={index}
              >
                {index + 1}
              </TechnologySelect>
            ))}
          </TechnologySelectContainer>
          <TechnologyArticle>
            <TechnologyTitle>The Terminology...</TechnologyTitle>
            <TechnologyName>{technology.name}</TechnologyName>
            <TechnologyDescription>
              {technology.description}
            </TechnologyDescription>
          </TechnologyArticle>
        </TechnologyContent>
      </TechnologyContainer>
    </TechnologyBg>
  );
};

export default Technology;
