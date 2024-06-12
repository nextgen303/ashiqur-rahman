// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#000] text-white py-4 text-center h-[500px] pt-20 -z-50">
      <div className="py-12 flex  md:flex-col-reverse items-start justify-between">
        <div className="flex flex-col items-start md:mt-10 ">
          <h3 className=" pt-6 text-lg xs:text-sm">
            Contact:
            <span className="text-base hover:underline xs:text-sm ">
              {" "}
              +880 1932131373
            </span>
          </h3>
          <h3 className=" pt-1 text-lg xs:text-sm">
            Email:
            <span className="text-base hover:underline xs:text-sm ">
              {" "}
              codeunlocked001@gmail.com{" "}
            </span>
          </h3>
          <span className="text-base xs:text-sm bg-dark text-light dark:bg-light dark:text-dark mt-5 px-3 py-1 rounded-sm ">
            {new Date().getFullYear()} &copy; All Rights Reserved
          </span>
        </div>

        <div className="flex flex-col text-base xs:text-sm">
          <span className="text-xl font-bold pb-3 md:mt-5 sm:text-lg">
            Quick Links
          </span>
          <ul className="flex items-center gap-14">
            <li>
              <Link to="/" className="hover:px-3 duration-150">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:px-3 duration-150">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:px-3 duration-150">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/updates" className="hover:px-3 duration-150">
                Updates
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:px-3 duration-150">
                Support
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-base  xs:text-sm">
          <span className="text-xl sm:text-lg font-bold pb-3">
            Contact Info
          </span>
          <Link
            href="https://wa.me/+8801932131373?`"
            title="Whats App"
            target="_blank"
            className="hover:px-3 duration-150"
          />
          <Link
            href="https://m.me/${nextdev2}"
            target="_blank"
            title="Messenger"
            className="pt-1 hover:px-3 duration-150"
          />
          <Link
            href="https://t.me/${nextdev2}"
            title="Telegram"
            target="_blank"
            className="pt-1 hover:px-3 duration-150"
          />
          <Link
            href="https://dribbble.com/code_unlocked"
            title="Dribbble"
            target="_blank"
            className="pt-1 hover:px-3 duration-150"
          />
          <Link
            href="https://www.instagram.com/code_unlocked/"
            title="Instagram"
            target="_blank"
            className="pt-1 hover:px-3 duration-150"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
