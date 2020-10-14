import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";

import PortfolioItem from "./PortfolioItem";
import i from "../../assets/images/bar/bar.png";
import p1 from "../../assets/images/portfolio/p1.jpg";
import p2 from "../../assets/images/portfolio/p2.jpg";
import p3 from "../../assets/images/portfolio/p3.jpg";

const cardsDefault = [
  {
    id: "a",
    col: "3",
    image: p1,
    filter: ["a c"],
  },
  {
    id: "b",
    col: "6",
    image: p2,
    filter: ["d b"],
  },
  {
    id: "c",
    col: "3",
    image: p3,
    filter: ["a c b"],
  },
];

const filtersDefault = [
  { title: "All", label: "*" },
  { title: "Design", label: "a" },
  { title: "App", label: "b" },
  { title: "Devloping", label: "c" },
  { title: "Corporate", label: "d" },
];

const PortfolioArea = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(
      () =>
        setIsotope(
          new Isotope(".em_load", {
            itemSelector: ".grid-item",
            layoutMode: "masonry",
            transitionDuration: "0.8s",
            filter: "*",
            resizesContainer: true,
          })
        ),
      2000
    );
  }, []);

  useEffect(() => {
    // debugger
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="witr_portfoli_area">
      <div className="bg">
        <div className="container">
          <div className="row ">
            {}
            {}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="witr_section_title">
                <div className="witr_sec_title_inner">
                  <h6>portfolio</h6>
                  <img src={i} alt="fward" />
                  <h2>All the work I have done has</h2>
                  <h2>brought me benefits</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="portfolio_filter justify-content-end">
                <ul className="filter_menu ">
                  {filtersDefault.map((f) => (
                    <li
                      key={`${f.label}_key`}
                      className={f.isChecked ? `${"current_menu_item"}` : ``}
                      onClick={() => setFilterKey(`${f.label}`)}
                    >
                      {f.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <div className="portfolio">
        <div className="row em_load">
          {cardsDefault.map((card) => (
            <div
              key={card.id}
              className={`col-lg-${card.col} col-md-6 col-sm-12 col-xs-12 grid-item ${card.filter}`}
            >
              <PortfolioItem image={card.image}></PortfolioItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
