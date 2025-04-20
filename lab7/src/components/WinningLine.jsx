import React from "react";
import getWinningLineProps from "../utils/getWinningLineProps";

const WinningLine = ({ combo }) => {
  const props = getWinningLineProps(combo);
  if (!props) return null;

  const cellSize = 80;
  const offset = cellSize / 2;
  const lineStyle = {
    position: "absolute",
    height: "4px",
    backgroundColor: "red",
    borderRadius: "2px",
    transformOrigin: "center",
    transition: "all 0.3s ease-in-out",
  };

  if (props.direction === "row") {
    return (
      <div
        style={{
          ...lineStyle,
          width: cellSize * 3,
          top: props.index * cellSize + offset,
          left: 0,
          transform: "translateY(-50%)",
        }}
      />
    );
  }

  if (props.direction === "col") {
    return (
      <div
        style={{
          ...lineStyle,
          width: cellSize * 3,
          transform: "rotate(90deg)",
          top: offset,
          left: props.index * cellSize + offset,
          transformOrigin: "center",
        }}
      />
    );
  }

  if (props.direction === "main-diagonal") {
    return (
      <div
        style={{
          ...lineStyle,
          width: Math.sqrt(2) * cellSize * 3,
          top: offset,
          left: 0,
          transform: `rotate(45deg) translateY(-50%)`,
        }}
      />
    );
  }

  if (props.direction === "anti-diagonal") {
    return (
      <div
        style={{
          ...lineStyle,
          width: Math.sqrt(2) * cellSize * 3,
          top: offset,
          right: 0,
          left: "auto",
          transform: `rotate(-45deg) translateY(-50%)`,
        }}
      />
    );
  }

  return null;
};

export default WinningLine;
