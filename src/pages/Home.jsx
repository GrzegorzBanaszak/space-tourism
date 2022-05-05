import React from "react";
import {
  HomeBg,
  HomeButton,
  HomeButtonContainer,
  HomeContanier,
  HomeSubtitle,
  HomeText,
  HomeTitle,
  HomeTop,
} from "../components/home.styled";
import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
const Home = () => {
  return (
    <HomeBg bg={bgMobile} bgTablet={bgTablet} bgDesktop={bgDesktop}>
      <HomeContanier>
        <HomeTop>
          <HomeSubtitle>So, you want to travel to</HomeSubtitle>
          <HomeTitle>Space</HomeTitle>
          <HomeText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </HomeText>
        </HomeTop>
        <HomeButtonContainer>
          <HomeButton>Explore</HomeButton>
        </HomeButtonContainer>
      </HomeContanier>
    </HomeBg>
  );
};

export default Home;
