import styled from "styled-components";

export const HomeContainer = styled.section`
  background-image: url(${({ bg }) => bg});
  height: 100vh;
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
