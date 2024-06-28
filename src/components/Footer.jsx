import React from "react";
import Magnetic from "../components/MagnetEffect";
import { BsLinkedin, BsPinterest, BsFacebook, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white min-h-max pb-10 w-full -z-50 overflow-hidden">
      <div className="rows pt-10 max-w-screen-2xl mx-auto px-20 flex justify-between gap-6 flex-wrap max-sm:px-3 max-sm:flex-col">
        <div className="one">
          <Magnetic>
            <a href="/">
              <svg
                className="w-10 max-sm:w-[40px]"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <defs>
                  <clipPath id="0dd01f54ee">
                    <path
                      d="M 9 59 L 368.84375 59 L 368.84375 302.78125 L 9 302.78125 Z M 9 59 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#0dd01f54ee)">
                  <path
                    fill="#ffffff"
                    d="M 135.6875 88.789062 L 151.300781 76.5 C 190.777344 45.464844 248.828125 58.695312 270.984375 103.777344 L 368.632812 302.574219 L 328.441406 302.574219 C 297.6875 302.574219 269.625 285.011719 256.15625 257.371094 L 191.75 125.203125 C 187.070312 115.597656 180.195312 107.171875 171.59375 100.800781 C 162.945312 94.414062 151.089844 88.929688 136.136719 89.347656 C 139.601562 93.714844 142.664062 98.519531 145.222656 103.757812 L 242.890625 302.574219 L 202.699219 302.574219 C 171.941406 302.574219 143.882812 285.011719 130.410156 257.371094 L 66.007812 125.203125 C 61.328125 115.597656 54.449219 107.171875 45.851562 100.800781 C 36.957031 94.238281 24.703125 88.617188 9.160156 89.398438 L 25.554688 76.5 C 60.246094 49.226562 109.28125 56.117188 135.6875 88.789062 Z M 53.199219 217.910156 L 9.125 302.503906 L 119.21875 302.46875 L 76.730469 218.082031 C 71.890625 208.457031 58.175781 208.355469 53.199219 217.910156 Z M 53.199219 217.910156 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
            </a>
          </Magnetic>

          <p className="mt-4">Expert Frontend Web Developer</p>

          <div className="flex items-start gap-5 pt-4">
            <Magnetic>
              <a href="#" className="text-2xl">
                <BsFacebook />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-2xl">
                <BsLinkedin />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-2xl">
                <BsPinterest />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-2xl">
                <BsGithub />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-2xl">
                <FaXTwitter />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="two">
          <h1 className="text-xl">Quick Links</h1>
          <div className="flex flex-col gap-2 pt-5">
            <Magnetic>
              <a href="/">Home</a>
            </Magnetic>
            <Magnetic>
              <a href="/about">About Me</a>
            </Magnetic>
            <Magnetic>
              <a href="/project">Projects</a>
            </Magnetic>
            <Magnetic>
              <a href="/blog">Blogs</a>
            </Magnetic>
          </div>
        </div>

        <div className="three">
          <h1 className="text-xl">Resources</h1>
          <div className="flex flex-col gap-2 pt-5">
            <Magnetic>
              <a href="/contact">Contact</a>
            </Magnetic>
            <Magnetic>
              <a href="/services">Services</a>
            </Magnetic>
            <Magnetic>
              <a href="/portfolio">Portfolio</a>
            </Magnetic>
            <Magnetic>
              <a href="/testimonials">Testimonials</a>
            </Magnetic>
          </div>
        </div>

        <div className="four">
          <h1 className="text-xl">Legal</h1>
          <div className="flex flex-col gap-2 pt-5">
            <Magnetic>
              <a href="/terms">Terms and Conditions</a>
            </Magnetic>
            <Magnetic>
              <a href="/privacy">Privacy Policy</a>
            </Magnetic>
            <Magnetic>
              <a href="/disclaimer">Disclaimer</a>
            </Magnetic>
            <Magnetic>
              <a href="/sitemap">Sitemap</a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="copyright max-w-screen-2xl mx-auto px-20 mt-10 flex justify-between max-sm:px-3 max-sm:flex-col">
        <div className="copy pt-4">© 2024 ashiqdev. All rights reserved.</div>

        <div className="top-btn pt-4">
          <Magnetic>
            <a
              href="#"
              className="bg-white text-black rounded-sm text-md font-semibold px-3 py-1 hover:bg-orange-700 transition-all duration-600"
            >
              Back to top
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default Footer;
