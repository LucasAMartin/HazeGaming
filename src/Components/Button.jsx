import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-purple-gradient hover:text-white rounded-[10px] mt-10 transition-colors duration-250 ${styles}`}>
    Get Started
  </button>
);

export default Button;
