import styled from "styled-components";

export const DestinationBg = styled.section`
  background-image: url(${({ bg }) => bg});
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    background-image: url(${({ bgTablet }) => bgTablet});
  }
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    background-image: url(${({ bgDesktop }) => bgDesktop});
  }
`;

export const DestinationContainer = styled.div`
  margin: 0 10vw;
`;

export const DestinationHeader = styled.div`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  p {
    margin-right: 0.7rem;
    opacity: 0.4;
  }
`;

export const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanetImage = styled.div`
  margin: 3rem 2rem;
  img {
    width: 100%;
  }
`;

export const PlanetContent = styled.div``;

export const PlanetList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7rem;
`;

export const PlanetSelect = styled.li`
  cursor: pointer;
  color: ${({ isSelect }) => (isSelect ? "white" : "#d0d6f9")};
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 1rem;
  border-bottom: ${({ isSelect }) => (isSelect ? "2px solid white" : "none")};
`;

export const PlanetName = styled.h2`
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const PlanetDescription = styled.p`
  color: #d0d6f9;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const PlanetInfo = styled.div`
  border-top: 1px solid #97979744;
  padding-top: 1rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-transform: uppercase;
    color: #d0d6f9;
    margin-top: 1rem;
    text-align: center;
  }
`;
export const PlanetData = styled.div`
  text-align: center;
  padding-top: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
`;
