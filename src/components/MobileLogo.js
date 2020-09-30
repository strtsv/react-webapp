import React from "react";
import i from "../assets/images/logo/m.png";

class MobileLogo extends React.Component {
  render() {
    return (
      <div className="mobile_logo_area hidden-lg hidden-md hidden-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mobile_menu_logo text-center">
                <a href="index.html">
                  <img src={i} alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileLogo;
