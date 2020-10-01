import React from "react";
import WebItem from "./WebItem";

const id1 = "01";
const title1 = "Brand";
const t1 = "Development";
const d1 =
  "Lorem ipsum dolor sit amet, consecteturg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const id2 = "02";
const title2 = "Corporate";
const t2 = "Identity";
const d2 =
  "Lorem ipsum dolor sit amet, consecteturg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const id3 = "03";
const title3 = "Web";
const t3 = "Development";
const d3 =
  "Lorem ipsum dolor sit amet, consecteturg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const WebArea = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          {}
          <WebItem id={id1} title={title1} t={t1} desc={d1}></WebItem>
          {}
          <WebItem id={id2} title={title2} t={t2} desc={d2}></WebItem>
          {}
          <WebItem id={id3} title={title3} t={t3} desc={d3}></WebItem>
        </div>
      </div>
    </div>
  );
};

export default WebArea;
