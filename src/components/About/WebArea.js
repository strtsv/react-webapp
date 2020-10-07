import React from "react";
import WebItem from "./WebItem";

class WebArea extends React.Component {
  render() {
    return (
      <div className="witr_web_area about">
        <div className="container">
          <div className="row">
            {}
            <WebItem></WebItem>
            {}
            <WebItem></WebItem>
            {}
            <WebItem></WebItem>
          </div>
        </div>
      </div>
    );
  }
}

export default WebArea;
