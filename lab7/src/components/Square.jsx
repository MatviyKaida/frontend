import React from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 border-2 border-black text-4xl font-bold flex items-center justify-center"
      onClick={onClick}
    >
      {value || <span className="invisible">-</span>}
    </button>
  );
}

export default Square;
