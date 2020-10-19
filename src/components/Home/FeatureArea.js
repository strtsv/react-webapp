import React from "react";
import FeatureItem from "./FeatureItem";

import i1 from "../../assets/images/feature/f1.png";
import i2 from "../../assets/images/feature/f2.png";
import i3 from "../../assets/images/feature/f3.png";


class FeatureArea extends React.Component {
  render() {
    return (
      <div className="witr_feature_area">
        <div className="container">
          <div className="row">
            {}
            {}
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="witr_saction_right mt-40">
                <div className="witr_saction_icon text-right">
                  <a
                    className="witr_s_btn video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <span>Video Presentation</span>
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="witr_section_title">
                <div className="witr_sec_title_inner">
                  <h2>We design digital platforms,</h2>
                  <h2>brands, build products and</h2>
                  <h2>marketing</h2>
                </div>
              </div>
            </div>
            {}
            <FeatureItem image={i1}></FeatureItem>
            {}
            <FeatureItem image={i2}></FeatureItem>
            {}
            <FeatureItem image={i3}></FeatureItem>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureArea;
