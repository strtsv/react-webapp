import React from "react";

class MainSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("did mount");
  }
  onEmsmenuClick = (event) => {
    this.refs.emsinner.classList.add("em-s-open");
    event.target.classList.add("em-s-hiddens");
    this.refs.emsmenu.classList.remove("em-s-hidden");
  };

  onEmscmenuClick = (event) => {
    this.refs.emsinner.classList.remove("em-s-open");
    event.target.classList.add("em-s-hidden");
    this.refs.emsmenu.classList.remove("em-s-hidden");
  };
  render() {
    return (
      <div className="em-quearys-top msin-menu-search">
        <div className="em-top-quearys-area">
          <ul className="em-header-quearys">
            <li className="em-quearys-menu">
              <i
                className="fa fa-search t-quearys"
                onClick={this.onEmsmenuClick}
                ref="emsmenu"
              />
            </li>
          </ul>
          {}
          <div className="em-quearys-inner" ref="emsinner">
            <div className="em-quearys-form">
              <form className="top-form-control" action="#" method="get">
                <input
                  type="text"
                  placeholder="Type Your Keyword"
                  name="s"
                  defaultValue
                />
                <button className="top-quearys-style" type="submit">
                  <i className="fa fa-long-arrow-right" />
                </button>
              </form>
              <ul className="em-header-quearys">
                <li className="em-quearys-menu">
                  <i
                    className="fa fa-close  t-close "
                    onClick={this.onEmscmenuClick}
                    ref="emscmenu"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
