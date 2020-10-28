import React from "react";

import i1 from "../../assets/images/blog/b1.jpg";
import i2 from "../../assets/images/blog/b2.jpg";
import i3 from "../../assets/images/blog/b3.jpg";
import bar from "../../assets/images/bar/bar.png";

class BlogArea extends React.Component {
  render() {
    return (
      <div className="witr_blog_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="witr_section_title text-center">
                <div className="witr_sec_title_inner">
                  <h6>Update</h6>
                  <img src={bar} alt="fward" />
                  <h2>We are Here to Manage Your</h2>
                  <h2>Law with Experience</h2>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_blog">
                <div className="witr_single_blog_thumb">
                  <img src={i1} alt />
                  <div className="witr_single_blog_date">
                    <span>
                      <i className="fa fa-clock-o" />
                    </span>
                    <h3>March 20, 2020</h3>
                  </div>
                </div>
                <div className="witr_blog_content">
                  <h4>
                    <a href="single-blog.html">
                      Strategic and commercial app with issues
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                    eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_blog">
                <div className="witr_single_blog_thumb">
                  <img src={i2} alt />
                  <div className="witr_single_blog_date">
                    <span>
                      <i className="fa fa-clock-o" />
                    </span>
                    <h3>March 22, 2020</h3>
                  </div>
                </div>
                <div className="witr_blog_content">
                  <h4>
                    <a href="single-blog.html">
                      Seven weeks working ‘pro bono’ with a charity.
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                    eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="witr_single_blog">
                <div className="witr_single_blog_thumb">
                  <img src={i3} alt />
                  <div className="witr_single_blog_date">
                    <span>
                      <i className="fa fa-clock-o" />
                    </span>
                    <h3>March 23, 2020</h3>
                  </div>
                </div>
                <div className="witr_blog_content">
                  <h4>
                    <a href="single-blog.html">
                      Retail banks wake up to digital lending this year
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                    eiusmod tempor
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

export default BlogArea;
