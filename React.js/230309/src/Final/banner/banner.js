import main_banner1 from "../images/main_banner1.png";
import main_banner2 from "../images/main_banner2.jpg";
import "../Header/header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "0px",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={main_banner1} alt="main_banner1" />
          </div>
          <div>
            <img src={main_banner2} alt="main_banner2" />
          </div>
        </Slider>
      </div>
    );
  }
}
