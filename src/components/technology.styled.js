import styled from "styled-components";

export const TechnologyBg = styled.section`
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

export const TechnologyHeader = styled.div`
  margin: 0 10vw;
  padding-top: 6rem;
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

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const TechnologyImage = styled.img`
  width: 100vw;
  display: block;
`;

export const TechnologyContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vw;
`;

export const TechnologySelectContainer = styled.ul`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

export const TechnologySelect = styled.li`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${({ isActive }) => (isActive ? "white" : "")};
  color: ${({ isActive }) => (isActive ? "#0b0d17" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }
`;

export const TechnologyTitle = styled.h5`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pinkWhite};
`;
export const TechnologyName = styled.h4`
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 1rem 0;
`;
export const TechnologyDescription = styled.p`
  color: ${({ theme }) => theme.colors.pinkWhite};
  line-height: 1.7rem;
  text-align: center;
`;
