import React from "react";

import HeaderTop from "../components/HeaderTop";
import MainMenu from "../components/MainMenu";
import MobileLogo from "../components/MobileLogo";
import MobileMenu from "../components/MobileMenu";
import SlickSliderArea from "../components/Home/SlickSliderArea";
import AboutArea from "../components/Home/AboutArea";
import FeatureArea from "../components/Home/FeatureArea";
import ServiceArea from "../components/Home/ServiceArea";
import CallToActionArea from "../components/Home/CallToActionArea";
import PortfolioArea from "../components/Home/PortfolioArea";
import WebArea from "../components/WebArea";
import BrandArea from "../components/Home/BrandArea";
import CounterArea from "../components/Home/CounterArea";
import TestomonialArea from "../components/Home/TestomonialArea";
import ContactArea from "../components/Home/ContactArea";
import BlogArea from "../components/Home/BlogArea";
import FooterArea from "../components/FooterArea";
import FooterBottom from "../components/FooterBottom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Home = () => {
  return (
    <>
      <ScrollUpButton />
      <HeaderTop />
      <MainMenu />
      <MobileLogo />
      <MobileMenu />
      <SlickSliderArea />
      <AboutArea />
      <FeatureArea />
      <ServiceArea />
      <CallToActionArea />
      <PortfolioArea />
      <WebArea className="witr_web_area" />
      <BrandArea />
      <CounterArea />
      <TestomonialArea />
      <ContactArea />
      <BlogArea />
      <FooterArea />
      <FooterBottom />
    </>
  );
};
export default Home;
