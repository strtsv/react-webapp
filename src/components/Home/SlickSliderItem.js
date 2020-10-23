import React from "react";

const SlickSliderItem = ({ image }) => {
  return (
    <div className="witr_slider_imge">
      <img src={image} alt="logo" />
      <div className="witr_content_area text-center">
        <div className="witr_slider_content container">
          <h5>Always try to create a product</h5>
          <h1>Trust and integrity,</h1>
          <h1>our recipe for success</h1>
          <div className="witr_slider_btn">
            <a
              className="witr_s_btn video-vemo-icon venobox vbox-item"
              data-vbtype="youtube"
              data-autoplay="true"
              href="https://youtu.be/BS4TUd7FJSg"
            >
              <i className="fa fa-play" />
              <span>Video Presentation</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickSliderItem;
