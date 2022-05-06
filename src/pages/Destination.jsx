import React from "react";
import {
  DestinationBg,
  DestinationContainer,
  DestinationHeader,
  PlanetContent,
  PlanetData,
  PlanetDescription,
  PlanetImage,
  PlanetInfo,
  PlanetList,
  PlanetName,
  PlanetsContainer,
  PlanetSelect,
} from "../components/destination.styled";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import data from "../data.json";
import { useState } from "react";
const Destination = () => {
  const [planet, setPlanet] = useState(data.destinations[0]);

  const isPlanetSelect = (planetName) => {
    if (planetName.toUpperCase() === planet.name.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  };

  const changePlane = (planetName) => {
    const newPlanet = data.destinations.find((x) => x.name === planetName);
    if (!newPlanet) return;

    setPlanet(newPlanet);
  };
  return (
    <DestinationBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      <DestinationContainer>
        <DestinationHeader>
          <p>01</p>Pick your destination
        </DestinationHeader>
        <PlanetsContainer>
          <PlanetImage>
            <img src={require(`../assets/${planet.images.png}`)} alt="planet" />
          </PlanetImage>
          <PlanetContent>
            <PlanetList>
              {data.destinations.map((item, index) => (
                <PlanetSelect
                  onClick={() => changePlane(item.name)}
                  key={index}
                  isSelect={isPlanetSelect(item.name)}
                >
                  {item.name}
                </PlanetSelect>
              ))}
            </PlanetList>
            <PlanetName>{planet.name}</PlanetName>
            <PlanetDescription>{planet.description}</PlanetDescription>
            <PlanetInfo>
              <div>
                <p>AVG. DISTANCE</p>
                <PlanetData>{planet.distance}</PlanetData>
              </div>
              <div>
                <p>Est. travel time</p>
                <PlanetData>{planet.travel}</PlanetData>
              </div>
            </PlanetInfo>
          </PlanetContent>
        </PlanetsContainer>
      </DestinationContainer>
    </DestinationBg>
  );
};

export default Destination;
