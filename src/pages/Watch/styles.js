import styled from "styled-components";
import variables from "../../global/variables";
import background from "../../assets/bg.jfif";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: ${`url(${background})`};
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: ${(props) =>
    props.theme.title === "light" ? "overlay" : "multiply"};
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;

  span {
    position: absolute;
    right: 40px;
    top: 40px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
    padding: 5px;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
    &:hover ~ p {
      opacity: 0.4;
    }

    @media (max-width: 900px) {
      opacity: 1;
    }
  }

  > video {
    max-width: 1200px;
    width: 98%;
    margin: 0 auto;

    &:hover ~ span,
    &:hover ~ p {
      opacity: 1;
    }
  }
`;

export const Name = styled.p`
  pointer-events: none;
  position: absolute;
  left: 40px;
  top: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  z-index: 100;
  max-width: 470px;
  opacity: 0;
  font-size: ${variables.titleMd};
  transition: opacity 0.2s linear;

  @media (max-width: 900px) {
    opacity: 1;
  }

  @media (max-width: 694px) {
    right: 10px;
    left: 10px;
    top: 80px;
    font-size: ${variables.titleSm};
  }
`;
