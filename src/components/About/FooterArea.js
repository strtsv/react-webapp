import React from "react";

class FooterArea extends React.Component {
  render() {
    return (
      <div className="witr_footer_area">
        <div className="container">
          <div className="row">
            {}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="witr_footer_item">
                <h4>About Us</h4>
                <p>
                  4 G-ral. Traian Mosoiu Street, A Building, 2nd for Entrance,
                  Flat 30, Cluj-Napoca, Romania
                </p>
                <span>+1-605-722-2032</span>
                <span>demo@example.com</span>
              </div>
            </div>
            {}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="witr_footer_item">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Legal info</a>
                  </li>
                  <li>
                    <a href="#">Knowledge Base</a>
                  </li>
                  <li>
                    <a href="#">GDPR Update</a>
                  </li>
                </ul>
              </div>
            </div>
            {}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="witr_footer_item">
                <h4>Support Link</h4>
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">WordPress</a>
                  </li>
                  <li>
                    <a href="#">Online Marketing</a>
                  </li>
                  <li>
                    <a href="#">Content</a>
                  </li>
                </ul>
              </div>
            </div>
            {}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="witr_footer_item">
                <h4>Recent Post </h4>
                <div className="witr_footer_thumb">
                  <a href="#">
                    <img src="assets/images/instagram/in1.jpg" alt="img" />
                  </a>
                  <a href="#">
                    <img src="assets/images/instagram/in2.jpg" alt="img" />
                  </a>
                  <a href="#">
                    <img src="assets/images/instagram/in3.jpg" alt="img" />
                  </a>
                  <a href="#">
                    <img src="assets/images/instagram/in4.jpg" alt="img" />
                  </a>
                  <a href="#">
                    <img src="assets/images/instagram/in5.jpg" alt="img" />
                  </a>
                  <a href="#">
                    <img src="assets/images/instagram/in6.jpg" alt="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterArea;
