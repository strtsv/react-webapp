import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/owl.carousel.css";
import i1 from "../../assets/images/testomonial/t1.png";
import i2 from "../../assets/images/testomonial/t2.png";
import i3 from "../../assets/images/testomonial/t3.png";

class TestomonialArea extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    const options = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      dots: true,
      fade: true,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
      },
    };
    return (
      <div className="witr_testomonial_area">
        <div className="container">
          <div className="curosel-style">
            {/* <div className="row witr_testomonial_slide owl-carousel curosel-style"> */}
            <OwlCarousel {...options}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="witr_background_test">
                  <div className="witr_testi_main">
                    <div className="witr_test_part ">
                      <img src={i1} alt />
                    </div>
                    <div className="witr_ns_part ">
                      <h1>Diana Austin</h1>
                      <span>Seo & Founder</span>
                    </div>
                    <div className="witr_test_content">
                      <p>
                        We always act like everyon adipisicing elit, sed do
                        eiusmod tempor ididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim , quis nostrud rcitati ullamco laboris
                        nisi ut aliquip ex ea commodo at. Duis aute irure dolor
                        innd erite always act like everyon
                      </p>
                    </div>
                    <div className="witr_test_name">
                      <h3>good design</h3>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="witr_background_test">
                  <div className="witr_testi_main">
                    <div className="witr_test_part ">
                      <img src={i2} alt />
                    </div>
                    <div className="witr_ns_part ">
                      <h1>Praveen Gupta</h1>
                      <span>Development</span>
                    </div>
                    <div className="witr_test_content">
                      <p>
                        We always act like everyon adipisicing elit, sed do
                        eiusmod tempor ididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim , quis nostrud rcitati ullamco laboris
                        nisi ut aliquip ex ea commodo at. Duis aute irure dolor
                        innd erite always act like everyon
                      </p>
                    </div>
                    <div className="witr_test_name">
                      <h3>good design</h3>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="witr_background_test">
                  <div className="witr_testi_main">
                    <div className="witr_test_part ">
                      <img src={i3} alt />
                    </div>
                    <div className="witr_ns_part ">
                      <h1>Raveen Gupta</h1>
                      <span>co & Founder</span>
                    </div>
                    <div className="witr_test_content">
                      <p>
                        We always act like everyon adipisicing elit, sed do
                        eiusmod tempor ididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim , quis nostrud rcitati ullamco laboris
                        nisi ut aliquip ex ea commodo at. Duis aute irure dolor
                        innd erite always act like everyon
                      </p>
                    </div>
                    <div className="witr_test_name">
                      <h3>good design</h3>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                      <span>
                        <i className="fa fa-star" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default TestomonialArea;
