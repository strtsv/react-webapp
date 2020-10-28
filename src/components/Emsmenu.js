import React from "react";

export default class Emsmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    console.log("did mount")
  }
  onItemClick = ({event}) => {
    this.refs.emsinner.className = "fa fa-close  t-close em-s-hidden";
    console.log("event")
  }
  render() { 
    return <i className="fa fa-search t-quearys" ref="emsmenu" onClick={this.onItemClick} />;
  }
}
