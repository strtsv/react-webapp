import React from "react";

class MobileMenu extends React.Component {
  render() {
    return (
      <div className="mobile_menu_area">
        <div className="containers">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_mobile_menu">
                <nav className="witr_menu_nav">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                      <ul className="witr_sub_menu">
                        <li>
                          <a href="index.html">Home-1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home-2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home-3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home-4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home-5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home-6</a>
                        </li>
                      </ul>{" "}
                      {}
                    </li>
                    <li>
                      <a href="#">About</a>
                      <ul className="witr_sub_menu">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="about-2.html">About-2</a>
                        </li>
                      </ul>{" "}
                      {}
                    </li>
                    <li>
                      <a href="#">Service</a>
                      <ul className="witr_sub_menu">
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="service-2.html">Service-2</a>
                        </li>
                      </ul>{" "}
                      {}
                    </li>
                    <li>
                      <a href="#">Page</a>
                      <ul className="witr_sub_menu">
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="team-2.html">Team-2</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="portfolio-2.html">Portfolio-2</a>
                        </li>
                        <li>
                          <a href="portfolio-3.html">Portfolio-3</a>
                        </li>
                      </ul>{" "}
                      {}
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <ul className="witr_sub_menu">
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Blog Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="single-blog.html">Single Blog</a>
                        </li>
                      </ul>{" "}
                      {}
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
