import React from "react";

const WebItem = ({ id, title, t, desc }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="witr_web_brand">
        <div className="witr_web_number">
          <span>{id}</span>
        </div>
        <div className="witr_web_content">
          <h1>{title}</h1>
          <h1>{t}</h1>
          <p>
            {desc}
          </p>
          <a href="#">See More</a>
        </div>
      </div>
    </div>
  );
};

export default WebItem;
