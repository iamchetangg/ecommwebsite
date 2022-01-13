import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ _type, type, label, _onClick }) => {
  return (
    <button
      type={type}
      className="custom-button"
      onClick={_onClick}
      name={_type}
    >
      {label}
    </button>
  );
};

export default CustomButton;
