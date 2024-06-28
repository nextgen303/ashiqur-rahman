import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Header from "../components/Header";
import Magnetic from "../components/MagnetEffect";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl px-20  max-sm:!px-3 max-xl:px-10  mx-auto  py-3 max-md:py-2 relative transition-transform duration-300 z-40">
      <div className="border-b border-black/5 max-md:border-none flex items-center justify-between pb-3 ">
        <Logo />

        <ul className="flex items-center gap-14 max-md:hidden">
          <Magnetic>
            <li className="hover:text-[#ff4800]">
              <Link to="/">Home</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="hover:text-[#ff4800]">
              <Link to="/about">About</Link>
            </li>
          </Magnetic>

          <Magnetic>
            <li className="hover:text-[#ff4800]">
              <Link to="/project">Projects</Link>
            </li>
          </Magnetic>
          <Magnetic>
            <li className="hover:text-[#ff4800]">
              <Link to="/blog">Blog</Link>
            </li>
          </Magnetic>
        </ul>

        <Magnetic>
          <a
            href=""
            className="bg-[#000000f5] text-white hover:bg-[#ff4800] hover:text-black w-[140px] px-6 py-2 rounded-full max-md:hidden flex items-center justify-between"
          >
            Contact{" "}
            <span className="mt-[2px]">
              <GoArrowRight />
            </span>
          </a>
        </Magnetic>

        <div className="w-10 hidden max-md:block">
          <Header />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
