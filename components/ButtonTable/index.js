import React from "react";

function ButtonTable(props) {
  const { children, className } = props;
  return (
    <button {...props} className={`btn-table ${className || ""}`} role="button">
      {children}
    </button>
  );
}

export default ButtonTable;
