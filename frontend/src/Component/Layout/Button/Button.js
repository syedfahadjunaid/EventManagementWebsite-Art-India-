import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
function Button({ children, bgcolor, bordercolor, color }) {
  return (
    <Link
      to="#"
      className="button"
      style={{
        color: `${color}`,
        background: `${bgcolor}`,
        borderColor: `${bordercolor}`,
      }}
    >
      {children}
    </Link>
  );
}

export default Button;
