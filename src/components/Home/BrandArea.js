import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";
import BrandItem from "./BrandItem";
import i1 from "../../assets/images/brand/b1.png";
import i2 from "../../assets/images/brand/b2.png";
import i3 from "../../assets/images/brand/b3.png";
import i4 from "../../assets/images/brand/b4.png";
import i5 from "../../assets/images/brand/b5.png";
import i6 from "../../assets/images/brand/b6.png";
import i7 from "../../assets/images/brand/b7.png";

class BrandArea extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
      nav: true,
      dots: false,
      fade: true,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
        // "<div class='owl-prev'><i class='fa fa-long-arrow-left'></i></div>",
        // "<div class='owl-next'><i class='fa fa-long-arrow-right'></i></div>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 5,
        },
        992: {
          items: 6,
        },
        1920: {
          items: 6,
        },
      },
    };
    return (
      <div className="witr_brand_area">
        <div className="container">
          <div className="row">
            <div className="curosel-style">
              {/* <div className=" witr_brand_car owl-carousel curosel-style"> */}
              <div className=" curosel-style">
                <OwlCarousel {...options}>
                  {}
                  <BrandItem image={i1}></BrandItem>
                  {}
                  <BrandItem image={i2}></BrandItem>
                  {}
                  <BrandItem image={i3}></BrandItem>
                  {}
                  <BrandItem image={i4}></BrandItem>
                  {}
                  <BrandItem image={i5}></BrandItem>
                  {}
                  <BrandItem image={i6}></BrandItem>
                  {}
                  <BrandItem image={i7}></BrandItem>
                  {}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandArea;
