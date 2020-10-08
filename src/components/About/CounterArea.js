import React from "react";
import bar from "../../assets/images/bar/bar.png";

class CounterArea extends React.Component {
  render() {
    return (
      <div className="witr_counter_area about">
        <div className="container">
          <div className="row">
            {}
            {}
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="witr_section_title text-center">
                <div className="witr_sec_title_inner">
                  <h6>Client</h6>
                  <img src={bar} alt="fward" />
                  <h2>We Always act Like Everyone</h2>
                  <h2>else's Choice</h2>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_counter">
                <div className="witr_s_counter_number">
                  <h1 className="witr_counter">256</h1>
                  <span>K</span>
                </div>
                <div className="witr_s_counter_content">
                  <h4>Happy Client</h4>
                  <p>
                    We always act like everyone else's ice et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_counter">
                <div className="witr_s_counter_number">
                  <h1 className="witr_counter">86</h1>
                  <span>K</span>
                </div>
                <div className="witr_s_counter_content">
                  <h4>Complate Project</h4>
                  <p>
                    We always act like everyone else's ice et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_counter">
                <div className="witr_s_counter_number">
                  <h1 className="witr_counter">56</h1>
                  <span>K</span>
                </div>
                <div className="witr_s_counter_content">
                  <h4>Complate Project</h4>
                  <p>
                    We always act like everyone else's ice et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterArea;
