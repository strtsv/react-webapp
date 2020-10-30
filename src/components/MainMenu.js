import React from "react";
import i from "../assets/images/logo/1.png";
import MainSearch from "./MainSearch";
// import Emsmenu from "./Emsmenu";
// import Emscmenu from "./Emscmenu";

class MainMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: "",
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "sticky";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div
        className={`witr_header_area hidden-xs hidden-sm hidden-md ${this.state.activeClass}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12">
              <div className="witr_header_logo">
                <a href="index.html">
                  <img src={i} alt />
                </a>
              </div>{" "}
              {}
            </div>
            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="witr_main_menu">
                <nav>
                  <ul>
                    <li className="witr_has_children">
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
                    <li className="witr_has_children">
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
                    <li className="witr_has_children">
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
                    <li className="witr_has_children">
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
                    <li className="witr_has_children">
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
<MainSearch />
                  {}
                  <div className="header_btn">
                    <div className="btns">
                      <a href="#">Sing Up</a>
                    </div>
                  </div>
                </nav>
              </div>{" "}
              {}
            </div>
          </div>{" "}
          {}
        </div>{" "}
        {}
      </div>
    );
  }
}

export default MainMenu;
