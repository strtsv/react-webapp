import React from "react";

class AboutTabArea extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        {}
        <ul className="nav">
          <li>
            <a data-toggle="tab" href="#ab1">
              <div className="witr_single_about">
                <div className="witr_about_thumb">
                  <img src="assets/images/about/i1.png" alt />
                </div>
                <div className="witr_about_contant">
                  <h2>Application development</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing lit, sed
                    do eiusmod tempor incidi
                  </p>
                </div>
              </div>
            </a>
          </li>
          {}
          <li>
            <a data-toggle="tab" className="show active" href="#ab2">
              <div className="witr_single_about">
                <div className="witr_about_thumb">
                  <img src="assets/images/about/i2.png" alt />
                </div>
                <div className="witr_about_contant">
                  <h2>Beneficial Strategies</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing lit, sed
                    do eiusmod tempor incidi
                  </p>
                </div>
              </div>
            </a>
          </li>
          {}
          <li>
            <a data-toggle="tab" href="#ab3">
              <div className="witr_single_about">
                <div className="witr_about_thumb">
                  <img src="assets/images/about/i3.png" alt />
                </div>
                <div className="witr_about_contant">
                  <h2>Human Resource</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing lit, sed
                    do eiusmod tempor incidi
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutTabArea;
