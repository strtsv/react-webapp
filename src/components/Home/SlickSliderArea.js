import React from "react";
import Slider from "react-slick";

import SlickSliderItem from "./SlickSliderItem";
import i1 from "../../assets/images/slider/s1.jpg";
import i2 from "../../assets/images/slider/s2.jpg";
import i3 from "../../assets/images/slider/s3.jpg";

var settings = {
  dots: false,
  speed: 1000,
  arrows: true,
  autoplay: true,
  fade: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
      },
    },
  ],
};

class SlickSliderArea extends React.Component {
  render() {
    return (
      <div className="witr_slider_area">
        <div className="containers">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="witr_single_slider witr_slider_active">
                {}
                <Slider {...settings}>
                  <SlickSliderItem image={i1}></SlickSliderItem>
                  {}
                  <SlickSliderItem image={i2}></SlickSliderItem>
                  {}
                  <SlickSliderItem image={i3}></SlickSliderItem>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlickSliderArea;
