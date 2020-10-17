import React from "react";

const FeatureItem = ({ image }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div className="witr_single_feature">
        <div className="witr_single_feature_image">
          <img src={image} alt="fward" />
        </div>
        <div className="witr_single_feature_content">
          <i className="fa fa-gears" />
          <h3>
            <a href="#">Application Development</a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default FeatureItem;
