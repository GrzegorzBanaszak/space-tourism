import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const NavLogo = styled.div`
  padding: 1rem;
`;

export const NavHamburger = styled.div`
  z-index: 2;
  padding: 1rem;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;
  padding: 2rem;
  background-color: #97979744;
  a {
    margin-left: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 2rem 0;
  }
  a:hover {
    border-bottom: 2px solid white;
  }
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    display: block;
  }
`;

export const NavMobile = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background: #97979744;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    display: none;
  }
`;

export const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  gap: 1.2rem;
  a {
    margin-left: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
`;
