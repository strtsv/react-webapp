import React from "react";

const BrandItem = ({ image }) => {
  return (
    <div className="col-lg-12 col-md-3 col-sm-12">
      <div className="witr_single_brand">
        <div className="witr_single_brand_thumb">
          <img src={image} alt="fward" />
        </div>
      </div>
    </div>
  );
};

export default BrandItem;
