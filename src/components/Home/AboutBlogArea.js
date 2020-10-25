import React from "react";
import AboutBlogItem from "./AboutBlogItem";
import i1 from "../../assets/images/about/r1.jpg";
import i2 from "../../assets/images/about/r2.jpg";
import i3 from "../../assets/images/about/r3.jpg";

class AboutBlogArea extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="tab-content">
          <div className="active show tab-pane fade" id="ab1">
            <AboutBlogItem image={i1}></AboutBlogItem>
          </div>
          <div className="tab-pane fade " id="ab2">
            <AboutBlogItem image={i2}></AboutBlogItem>
          </div>
          <div className="tab-pane fade " id="ab3">
            <AboutBlogItem image={i3}></AboutBlogItem>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBlogArea;
