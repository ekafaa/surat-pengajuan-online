import React from "react";

function Buttons(props) {
  const { children, className } = props;
  return (
    <button
      {...props}
      className={`btn-custom ${className || ""}`}
      role="button"
    >
      {children}
    </button>
  );
}

export default Buttons;
