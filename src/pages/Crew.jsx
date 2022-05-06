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
import { useEffect } from "react";
const Crew = () => {
  const [personIndex, setPersonIndex] = useState(0);
  const [person, setPerson] = useState(data.crew[0]);

  useEffect(() => {
    const intervalId = setInterval(autoPersonChange, 5000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const autoPersonChange = () => {
    if (personIndex === data.crew.length - 1) {
      setPersonIndex(0);
      setPerson(data.crew[0]);
    } else {
      setPersonIndex((prev) => prev + 1);
      setPerson(data.crew[personIndex + 1]);
    }
  };

  const isPersonSelect = (personName) => {
    if (person.name === personName) {
      return true;
    } else {
      return false;
    }
  };

  const selectPerson = (personName) => {
    const newPerson = data.crew.find((x) => x.name === personName);
    if (!newPerson) return;
    setPersonIndex(data.crew.indexOf(newPerson));
    setPerson(newPerson);
  };
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
            {data.crew.map((item, index) => (
              <CrewNavElement
                isSelect={isPersonSelect(item.name)}
                onClick={() => selectPerson(item.name)}
              ></CrewNavElement>
            ))}
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
