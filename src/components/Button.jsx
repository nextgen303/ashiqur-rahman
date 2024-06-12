import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { GoArrowDownRight } from "react-icons/go";

const Button = ({ href, label, className }) => {
  return (
    <div className={`btn-animation ${className}`}>
      <a href="/about" className="btn ab-btn">
        {label}
      </a>
      <GoArrowDownRight className="inner-arrow" />
      <span></span>
    </div>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
