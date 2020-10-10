import React from "react";

class WebItem extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="witr_web_brand">
          <div className="witr_web_number">
            <span>01</span>
          </div>
          <div className="witr_web_content">
            <h1>Brand</h1>
            <h1>Development</h1>
            <p>
              Lorem ipsum dolor sit amet, consecteturg elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#">See More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default WebItem;
