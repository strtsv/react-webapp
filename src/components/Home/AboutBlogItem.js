import React from "react";

const AboutBlogItem = ({ image }) => {
  return (
    <div className="witr_single_a_blog">
      <div className="witr_single_a_blog_thumb">
        <img src={image} alt />
        <div className="witr_single_a_blog_date">
          <span>450+</span>
          <h3>Successful Customers</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutBlogItem;
