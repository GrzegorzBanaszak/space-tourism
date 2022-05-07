import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    padding: 2rem 0;
  }
`;

export const NavLogo = styled.div`
  padding: 1rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    padding-left: 3rem;
  }
`;

export const NavHamburger = styled.div`
  z-index: 3;
  padding: 1rem;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;
  background-color: #97979744;
  a {
    margin-left: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 3rem 0;
    position: relative;
  }
  a:hover {
    border-bottom: 2px solid #ccc;
  }
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    position: relative;
    width: 50%;
    padding-right: 4rem;
    &::before {
      content: "";
      position: absolute;
      left: -39vw;
      top: 50%;
      width: 40vw;
      height: 2px;
      background-color: #97979744;
    }
  }
`;

export const NavMobile = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #0b0d1799;
  backdrop-filter: blur(5px);
  top: 0;
  right: 0;
  height: 100%;
  z-index: 2;
  width: 60%;
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    display: none;
  }
`;

export const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  gap: 2.5rem;
  a {
    margin-left: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
`;
