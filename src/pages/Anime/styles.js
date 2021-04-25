import styled from "styled-components";
import variables from "../../global/variables";
import background from "../../assets/bg.jpg";

import { FiArrowLeft } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${variables.bg_dark};
  padding: ${variables.space};
  position: relative;
  background-image: ${`url(${background})`};
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
`;

export const GoBack = styled.div`
  position: fixed;
  top: 60px;
  right: 60px;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-image: linear-gradient(
    to right,
    ${variables.neon_red} 0%,
    ${variables.neon_yellow} 100%
  );

  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 200000;

  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    transform: rotate(360deg);
    box-shadow: 0 0 6px ${variables.neon_red};
  }
`;

export const IconGoBack = styled(FiArrowLeft)`
  width: 22px;
  height: 22px;
  color: ${variables.white};
`;

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1336px;
  width: 100%;
  margin: 0 auto;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: ${variables.spaceMd};
  border-bottom: 1px solid ${variables.neon_red};
`;

export const HeaderInfo = styled.div`
  margin-top: ${variables.spaceLg};
  display: flex;
  position: relative;

  @media (max-width: 459px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageAnime = styled.div`
  max-width: 150px;
  width: 100%;
  margin-right: ${variables.spaceSm};

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Hero = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: ${variables.titleSm};
    color: ${variables.neon_red};
  }
  span {
    font-size: ${variables.textSm};
    max-width: 700px;
    color: ${variables.white};
    letter-spacing: ${variables.textSpacingMd};
  }

  @media (max-width: 459px) {
    h2 {
      text-align: center;
    }
    padding: 0 10px;
  }
`;

export const Footer = styled.footer`
  margin-top: ${variables.spaceSm};

  p + p {
    margin-top: ${variables.spaceXs};
  }
  p {
    background: ${variables.neon_red};
    color: ${variables.white};
    font-size: ${variables.textSm};
    border-radius: 5px;
    padding: 0 5px;
  }

  @media (max-width: 459px) {
    margin-top: ${variables.space};
  }
`;

export const EpisodesContainer = styled.section`
  width: 100%;
  margin-top: ${variables.space};
`;

export const ListEpisodes = styled.ul`
  margin-top: ${variables.space};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EpisodeItem = styled.li`
  padding: ${variables.spaceSm};
  margin: ${variables.spaceXs} 0;
  background: ${(props) =>
    props.watched ? variables.neon_red : variables.grey2};
  color: ${variables.white};
  border-radius: 8px;
  cursor: pointer;
`;

export const TitleCategory = styled.div`
  color: ${variables.white};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${variables.spaceXs};
  }

  h2 {
    letter-spacing: ${variables.textSpacingMd};
  }
`;
