import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";
import ShortDetails from "../components/ShortDetails";

const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <HomeMarquee />
      <ShortDetails />
    </div>
  );
};

export default Home;
