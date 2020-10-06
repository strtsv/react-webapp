import React from "react";
import AboutBlogItem from "./AboutBlogItem";

class BlogArea extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="tab-content">
          <div className="active show tab-pane fade" id="ab1">
            <AboutBlogItem></AboutBlogItem>
          </div>
          <div className="tab-pane fade " id="ab2">
            <AboutBlogItem></AboutBlogItem>
          </div>
          <div className="tab-pane fade " id="ab3">
            <AboutBlogItem></AboutBlogItem>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogArea;
