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
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    padding-top: 10rem;
    justify-content: start;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: 1.3rem;
    padding-top: 12rem;
  }
`;

export const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    flex-direction: row;
    margin-top: 6rem;
  }
`;

export const PlanetImage = styled.div`
  margin: 3rem 2rem;
  img {
    width: 100%;
    max-width: 350px;
  }
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    margin: 3rem auto;
  }

  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    img {
      max-width: 1200px;
    }
  }
`;

export const PlanetContent = styled.div`
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    max-width: 50%;
  }
`;

export const PlanetList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7rem;
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    justify-content: center;
    gap: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    justify-content: start;
  }
`;

export const PlanetSelect = styled.li`
  cursor: pointer;
  color: ${({ isSelect }) => (isSelect ? "white" : "#d0d6f9")};
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 1rem;
  border-bottom: ${({ isSelect }) => (isSelect ? "2px solid white" : "none")};
  &:hover {
    border-bottom: 2px solid #ccc;
  }
`;

export const PlanetName = styled.h2`
  text-align: center;
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    text-align: left;
  }
`;

export const PlanetDescription = styled.p`
  color: #d0d6f9;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 2rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    text-align: left;
    font-size: 1.5rem;
    max-width: 70%;
    margin-bottom: 5rem;
    line-height: 2.5rem;
  }
`;

export const PlanetInfo = styled.div`
  border-top: 1px solid #97979744;
  padding-top: 1rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    justify-content: start;
    gap: 7rem;
  }
  p {
    text-transform: uppercase;
    color: #d0d6f9;
    margin-top: 1rem;
    text-align: center;
    @media (min-width: ${({ theme }) => theme.size.laptop}) {
      text-align: left;
    }
  }
`;
export const PlanetData = styled.div`
  text-align: center;
  padding-top: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    text-align: left;
  }
`;
