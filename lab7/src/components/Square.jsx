import React from "react";
import "./Square.css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value || <span className="invisible">-</span>}
    </button>
  );
}

export default Square;
