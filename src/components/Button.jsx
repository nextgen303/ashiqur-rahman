import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { GoArrowDownRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Button = ({ href, label, className = "" }) => {
  return (
    <div className={`btn-animation ${className}`}>
      <Link to={href} className="btn ab-btn">
        {label}
      </Link>
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

export default Button;
