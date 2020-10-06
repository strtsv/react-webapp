import React from "react";

class AboutBlogItem extends React.Component {
  render() {
    return (
      <div className="witr_single_a_blog">
        <div className="witr_single_a_blog_thumb">
          <img src="assets/images/about/r1.jpg" alt />
          <div className="witr_single_a_blog_date">
            <span>450+</span>
            <h3>Successful Customers</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBlogItem;
