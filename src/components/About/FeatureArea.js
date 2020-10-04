import React from "react";
import FeatureItem from "./FeatureItem";
import bar from "../../assets/images/bar/bar.png";
import i1 from "../../assets/images/feature/f1.png";
import i2 from "../../assets/images/feature/f2.png";
import i3 from "../../assets/images/feature/f3.png";

class FeatureArea extends React.Component {
  render() {
    return (
      <div className="witr_feature_area7 about">
        <div className="container">
          <div className="row">
            {}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="witr_section_title text-center">
                <div className="witr_sec_title_inner">
                  <h6>FEATURES</h6>
                  <img src={bar} alt="fward" />
                  <h2>What Can We Offer For You</h2>
                </div>
              </div>
            </div>
            {}
            <FeatureItem image={i1} ico="fa fa-gears"></FeatureItem>
            {}
            <FeatureItem image={i2} ico="fa fa-bar-chart"></FeatureItem>
            {}
            <FeatureItem image={i3} ico="fa fa-group"></FeatureItem>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureArea;
