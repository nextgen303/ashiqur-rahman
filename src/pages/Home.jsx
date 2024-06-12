import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";
import ShortDetails from "../components/ShortDetails";
import WorkProcess from "../components/WorkProcess";
import HomeProject from "../components/HomeProject";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <HomeMarquee />
      <ShortDetails />
      <WorkProcess />
      <HomeProject />

      <Footer />
    </div>
  );
};

export default Home;
