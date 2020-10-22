import React from "react";

const PortfolioItem = ({ image }) => {
  return (
    <div className="single_portfolio">
      <div className="single_portfolio_thumb">
        <img src={image} alt="title" />
        <div className="portfolio_social">
          <a
            className="portfolio-icon venobox vbox-item"
            href={image}
          >
            <i className="fa fa-arrows" />
          </a>
          <a className="single_p_link" href="#">
            <i className="fa fa-link" />
          </a>
        </div>
      </div>
      <div className="single_portfolio_content">
        <a href="#">
          <h3>Business Illustration</h3>
        </a>
        <p>Investments / Business</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
