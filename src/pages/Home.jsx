import React from "react";
import { HomeContainer } from "../components/home.styled";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
const Home = () => {
  return (
    <HomeContainer bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      Home
    </HomeContainer>
  );
};

export default Home;
