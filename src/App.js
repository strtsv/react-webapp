import React from "react";
import { Route } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/default.css";
import "./assets/css/btn-style.css";
import "./assets/css/venobox/venobox.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/header-menu.css";
import "./assets/css/meanmenu.min.css";
import "./assets/css/slick.css";
import "./style.css";

import "./assets/css/responsive.css";
import "./assets/css/widget.css";

import Home from "./pages/Home";
// import About from "./pages/About";

function App() {
  // return <Route exact path="/" component={About} />;
  return <Route exact path="/" component={Home} />;
}

export default App;
