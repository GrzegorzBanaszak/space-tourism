import styled from "styled-components";

export const CrewBg = styled.section`
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

export const CrewContainer = styled.div`
  margin: 0 10vw;
`;
export const CrewHeader = styled.div`
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
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    font-size: 1.3rem;
    padding-top: 12rem;
  }
`;

export const CrewContent = styled.div`
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    flex-direction: row-reverse;
    justify-content: space-around;
    height: calc(100vh - 13.5rem);
  }
`;

export const CrewTop = styled.div`
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    width: 50%;
    position: relative;
  }
`;
export const CrewImage = styled.div`
  border-bottom: 2px solid #97979744;
  margin-top: 2rem;
  img {
    margin: 0 auto;
    display: block;
    height: 200px;
    @media (min-width: ${({ theme }) => theme.size.tablet}) {
      height: 45vh;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    @media (min-width: ${({ theme }) => theme.size.laptop}) {
      height: calc(100vh - 16rem);
      /* position: relative; */
      margin-top: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.size.tablet}) {
    border-bottom: none;
  }
`;

export const CrewNav = styled.ul`
  list-style-type: none;
  margin-top: 1.3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    display: none;
  }
`;

export const CrewNavDesktop = styled.ul`
  list-style-type: none;
  margin-top: 1.3rem;
  display: none;
  justify-content: center;
  gap: 1rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    margin-top: 6rem;
    display: flex;
  }
`;
export const CrewNavElement = styled.li`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${({ isSelect }) =>
    isSelect ? "white" : "rgba(255, 255, 255, 0.2);"};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

export const CrewBottom = styled.article`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    width: 50%;
    align-items: start;
    margin-top: 5rem;
  }
`;
export const CrewRole = styled.h5`
  color: #979797;
  text-transform: uppercase;
  margin: 0.5rem 0;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: 2rem;
  }
`;
export const CrewName = styled.h4`
  text-transform: uppercase;
  margin: 0.5rem 0;
  font-size: 1.4rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    font-size: 4.2rem;
  }
`;
export const CrewBio = styled.p`
  color: #d0d6f9;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  line-height: 1.3rem;
  @media (min-width: ${({ theme }) => theme.size.laptop}) {
    width: 80%;
    line-height: 2rem;
    text-align: left;
    font-size: 1.5rem;
    min-height: 160px;
  }
`;
