import React from "react";
import Hero from "../components/Hero";
import HomeMarquee from "../components/HomeMarquee";
import ShortDetails from "../components/ShortDetails";
import WorkProcess from "../components/WorkProcess";
import HomeProject from "../components/HomeProject";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <HomeMarquee />
      <ShortDetails />
      <WorkProcess />

      <Projects />

      <HomeProject />

      <Layout />
    </div>
  );
};

export default Home;
