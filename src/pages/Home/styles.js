import styled from "styled-components";
import variables from "../../global/variables";

import defaultImg from "../../assets/default.jfif";
import background from "../../assets/bg.jfif";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  padding: ${variables.space};
  background-image: ${`url(${background})`};
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: ${(props) =>
    props.theme.title === "light" ? "overlay" : "multiply"};
`;

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1336px;
  width: 100%;
  margin: 0 auto;
`;

export const Hero = styled.header`
  margin-top: ${variables.space};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    max-width: 200px;
    width: 100%;
  }

  h2 {
    font-size: ${variables.titleXl};
    color: ${(props) => props.theme.colors.primary};
  }
  span {
    font-size: ${variables.textXlg};
    color: ${(props) => props.theme.colors.text};
    letter-spacing: ${variables.textSpacingMd};
  }
`;

export const SearchBox = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${variables.space};

  input {
    max-width: 500px;
    width: 100%;
    border: none;
    background: ${(props) => props.theme.colors.searchBoxBg};
    color: ${(props) => props.theme.colors.textSearchBox};
    padding: ${variables.spaceSm} ${variables.space};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-weight: bold;

    &::placeholder {
      font-style: italic;
      letter-spacing: ${variables.textSpacingSm};
      font-weight: 300;
    }
  }

  button {
    border: none;
    background-image: linear-gradient(
      to right,
      ${variables.neon_red} 0%,
      ${variables.neon_yellow} 100%
    );
    background-size: 200%;
    background-position: 0% 0%;
    padding: ${variables.spaceSm} ${variables.space};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: none;
    border-left: 1px solid ${(props) => props.theme.colors.text};
    color: ${variables.white};

    font-weight: bold;

    transition: all 0.2s linear;

    &:hover {
      background-position: 100% 100%;
    }
  }
`;

export const Clear = styled.div`
  margin-top: ${variables.space};

  span {
    font-size: 12px;
    padding: ${variables.spaceXs} ${variables.spaceSm};
    display: block;

    color: ${variables.white};
    border: 1px solid ${variables.white};
    background: ${variables.bg_dark};

    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not(:active) {
      color: ${variables.bg_dark};
      background: ${variables.white};
      border: 1px solid ${variables.white};
    }

    &:active {
      color: ${variables.white};
      background: ${variables.black};
      border: 1px solid ${variables.black};
    }
  }
`;

export const Results = styled.div`
  margin-top: ${variables.spaceLg};

  width: 100%;
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

/* SLIDE */

export const SliderContainer = styled.section`
  width: 100%;
  min-height: 197px;
  margin: ${variables.space} 0 ${variables.spaceXl};
`;

export const SliderItem = styled.li`
  margin: 10px 8px;
`;

export const SliderCard = styled.div`
  width: 180px;
  height: 280px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  background: ${(props) =>
    props.bgURL ? `url(${props.bgURL})` : `url(${defaultImg})`};
  background-color: rgba(0, 0, 0, 0.2);
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    padding: 10px;
    color: transparent;
    background: transparent;
    opacity: 0;
    transform: translateY(100px);
    transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.2s linear, background 0.2s linear, color 0.2s linear;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);

    background-blend-mode: lighten;
  }
  &:hover > span {
    transform: translateY(0);
    background: rgba(0, 0, 0, 0.7);
    color: ${variables.white};
    opacity: 1;
  }

  &:hover > div > img {
    opacity: 1;
  }
  @media (max-width: 961px) {
    span {
      transform: translateY(0);
      background: rgba(0, 0, 0, 0.7);
      color: ${variables.white};
      opacity: 1;
    }
  }
`;
