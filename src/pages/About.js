import React from "react";
import HeaderTop from "../components/HeaderTop";
import MainMenu from "../components/MainMenu";
import MobileLogo from "../components/MobileLogo";
import Banner from "../components/About/Banner";
import AboutArea from "../components/Home/AboutArea";
import WebArea from "../components/WebArea";
import FeatureArea from "../components/About/FeatureArea";
import CounterArea from "../components/About/CounterArea";
import TestomonialArea from "../components/About/TestomonialArea";
import FooterArea from "../components/FooterArea";
import FooterBottom from "../components/FooterBottom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const About = () => {
  return (
    <>
      <ScrollUpButton />
      <HeaderTop />
      <MainMenu />
      <MobileLogo />
      <Banner />
      <AboutArea />
      <WebArea className="witr_web_area about" />
      <FeatureArea />
      <CounterArea />
      <TestomonialArea />
      <FooterArea />
      <FooterBottom />
    </>
  );
};

export default About;
