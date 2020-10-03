import React from "react";

export default class Emscmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    console.log("did mount")
  }
  onItemClick = ({event}) => {
    this.refs.emsinner.className = "fa fa-search t-quearys";
    console.log("event")
  }
  render() { 
    return <i className="fa fa-close  t-close " ref="emscmenu" onClick={this.onItemClick} />;
    // return <i className="fa fa-close  t-close em-s-hidden" ref="huy" onClick={this.onItemClick} />;
  }
}
