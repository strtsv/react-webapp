import React from "react";

class CallToActionArea extends React.Component {
  render() {
    return (
      <div className="call_to_action_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12">
              <div className="call_to_action_title_">
                <div className="call_to_action_title_content">
                  <h2>Start Your Future Business Now!</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua nim ad minim veniam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
              <div className="call_to_action_batton btns justify-content-end">
                <a className="strat" href="#">
                  Free Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToActionArea;
