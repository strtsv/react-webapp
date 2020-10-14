import React from "react";

class HeaderTop extends React.Component {
  render() {
    return (
      <div className="witr_header_top">
        <div className="container">
          <div className="row">
            {}
            <div className="col-lg-7 col-md-8 col-sm-12">
              <div className="witr_top_address">
                <p>
                  <a href="tel:+998556778345">
                    <i className="fa fa-phone" />
                    +998556778345
                  </a>
                  <a href="mailto:fward@example.com">
                    <i className="fa fa-envelope-o" />
                    fward@example.com
                  </a>
                </p>
              </div>
            </div>
            {}
            <div className="col-lg-5 col-md-4 col-sm-12">
              <div className="witr_top_right_menu text-right">
                <div className="witr_select">
                  <select name="a" id="b">
                    <option value>English</option>
                    <option value>Bangla</option>
                    <option value>Arabic</option>
                  </select>
                </div>
                <div className="witr_select2">
                  <select name="c" id="d">
                    <option value>New York Office</option>
                    <option value>Inda York Office</option>
                    <option value>New York Office</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
