import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const NavLogo = styled.div``;

export const NavHamburger = styled.div`
  z-index: 2;
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.04);
  a {
    margin-left: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
  @media (min-width: ${({ theme }) => theme.size.mobileL}) {
    display: block;
  }
`;

export const NavMobile = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.04);
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
