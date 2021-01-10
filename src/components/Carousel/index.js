import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import * as S from "./styles";

const Carousel = ({ children }) => (
  <S.Container>
    <Slider
      {...{
        dots: false,
        infinite: false,
        speed: 400,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        draggable: true,
      }}
    >
      {children}
    </Slider>
  </S.Container>
);

export default Carousel;
