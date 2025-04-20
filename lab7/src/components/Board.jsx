import React, { useEffect, useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import "./Board.css";
import Square from "./Square";

const createEmptyBoard = () => Array(3).fill(null).map(() => Array(3).fill(null));

const Board = () => {
  const [board, setBoard] = useState(createEmptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem("ttt-stats");
    return saved ? JSON.parse(saved) : { X: 0, O: 0, draw: 0 };
  });
  
  const [winningCombo, setWinningCombo] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("ttt-stats");
    if (saved) setStats(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("ttt-stats", JSON.stringify(stats));
  }, [stats]);

  const winner = winningCombo.length ? board[winningCombo[0][0]][winningCombo[0][1]] : null;
  const isDraw = !winner && board.flat().every(Boolean);

  const status = winner
    ? `Переможець: ${winner}`
    : isDraw
    ? "Нічия!"
    : `Хід гравця: ${xIsNext ? "X" : "O"}`;

  const handleClick = (row, col) => {
    if (board[row][col] || winner) return;

    const newBoard = board.map((r) => [...r]);
    const current = xIsNext ? "X" : "O";
    newBoard[row][col] = current;

    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const result = calculateWinner(newBoard, row, col);
    if (result) {
      setWinningCombo(result.combo);
      setStats((prev) => ({ ...prev, [current]: prev[current] + 1 }));
    } else if (newBoard.flat().every(Boolean)) {
      setStats((prev) => ({ ...prev, draw: prev.draw + 1 }));
    }
  };

  const restart = () => {
    setBoard(createEmptyBoard());
    setXIsNext(true);
    setWinningCombo([]);
  };

  return (
    <div className="board-container">
      <h1 className="board-title">Хрестики-Нулики</h1>

      <div className="board-stats">
        🟦 X: {stats.X} | 🟥 O: {stats.O} | ⚪ Нічиї: {stats.draw}
      </div>

      <table className="board-table">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex} className="board-cell">
                <Square value={value} onClick={() => handleClick(rowIndex, colIndex)} />
              </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="status-text">{status}</div>

      <button className="restart-button" onClick={restart}>
        Почати знову
      </button>
    </div>
  );
};

export default Board;
