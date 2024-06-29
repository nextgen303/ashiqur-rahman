import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Project from "./pages/Project";
import Login from "./pages/Login";
import NotFoundPage from "./pages/404";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import LocomotiveScroll from "locomotive-scroll";

const AppContent = ({ setLoading }) => {
  const location = useLocation();

  // Conditionally hide the navbar
  const hideNavbar =
    location.pathname.startsWith("/project/") ||
    location.pathname.startsWith("/blog/");

  // Set loading state when location changes
  useEffect(() => {
    setLoading(true);
  }, [location, setLoading]);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CustomCursor />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // Initialize LocomotiveScroll and clean up on unmount
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="select-none">
      <Router>
        {loading && <Preloader setLoading={setLoading} />}
        <AppContent setLoading={setLoading} />
      </Router>
    </div>
  );
};

export default App;
