import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";

const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <HomeMarquee />
    </div>
  );
};

export default Home;
