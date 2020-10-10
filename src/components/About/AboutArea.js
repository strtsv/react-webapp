import React from "react";
import AboutTabArea from "./AboutTabArea";
import BlogArea from "./BlogArea";

class AboutArea extends React.Component {
  render() {
    return (
      <div className="witr_about_area">
        <div className="container">
          <div className="row">
            {}
            {}
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="witr_section_title">
                <div className="witr_sec_title_inner">
                  <h6>About Us</h6>
                  <img src="assets/images/bar/bar.png" alt="fward" />
                  <h2>We are the largest Business</h2>
                  <h2>expert in Europe and Asia</h2>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="witr_saction_right mt-50">
                <div className="witr_saction_icon">
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
          <div className="row">
            <AboutTabArea></AboutTabArea>
            {}
            <BlogArea></BlogArea>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutArea;
