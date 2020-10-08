import React from "react";

class FooterBottom extends React.Component {
  render() {
    return (
      <div className="witr_bottom_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="witr_copyright">
                <span>
                  © 2020, fward Theme by psdexpart Team All Rights Reserved.
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="witr_footer_menu">
                {}
                <ul className="text-right">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
