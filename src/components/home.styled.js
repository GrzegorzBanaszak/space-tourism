import styled from "styled-components";

export const HomeBg = styled.section`
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

export const HomeContanier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  padding-bottom: 3rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    flex-direction: row;
    height: 100%;
    justify-content: space-evenly;
    padding-top: 12rem;
  }
`;

export const HomeTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    max-width: 30%;
    align-items: start;
  }
`;

export const HomeTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontsSize.h2};
  margin: 1.2rem 0;
  text-transform: uppercase;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: ${({ theme }) => theme.fontsSize.h1};
  }
`;

export const HomeText = styled.p`
  line-height: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.pinkWhite};
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    text-align: left;
  }
`;

export const HomeSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.pinkWhite};
  letter-spacing: 1.75px;
  text-transform: uppercase;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: 1.5rem;
  }
`;

export const HomeButtonContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #97979744;
    transition: all ease-in 0.3s;
    cursor: pointer;
  }
  &:hover::before {
    width: 15rem;
    height: 15rem;
  }
`;

export const HomeButton = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: none;
  font-size: 1.4rem;
  text-transform: uppercase;
  background-color: white;
  color: ${({ theme }) => theme.colors.darkBlack};
`;
