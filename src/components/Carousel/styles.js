import styled from "styled-components";
import variables from "../../global/variables";

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;

    &:before {
      font-size: 30px;
      color: ${variables.white};
    }
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }

  @media (max-width: 965px) {
    .slick-prev {
      left: 5px;
    }
    .slick-next {
      right: 5px;
    }
  }
`;
