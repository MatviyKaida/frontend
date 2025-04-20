import React, { useEffect, useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import Square from "./Square.jsx";

const createEmptyBoard = () => Array(3).fill(null).map(() => Array(3).fill(null));

const Board = () => {
  const [board, setBoard] = useState(createEmptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [stats, setStats] = useState({ X: 0, O: 0, draw: 0 });
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

    const updatedBoard = board.map((r) => [...r]);
    const current = xIsNext ? "X" : "O";
    updatedBoard[row][col] = current;

    setBoard(updatedBoard);
    setXIsNext(!xIsNext);

    const result = calculateWinner(updatedBoard, row, col);
    if (result) {
      setWinningCombo(result.combo);
      setStats((prev) => ({ ...prev, [current]: prev[current] + 1 }));
    } else if (updatedBoard.flat().every(Boolean)) {
      setStats((prev) => ({ ...prev, draw: prev.draw + 1 }));
    }
  };

  const restart = () => {
    setBoard(createEmptyBoard());
    setXIsNext(true);
    setWinningCombo([]);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Хрестики-Нулики</h1>

      <div className="text-lg">
        🟦 X: {stats.X} | 🟥 O: {stats.O} | ⚪ Нічиї: {stats.draw}
      </div>

      <>
        <div className="board-row flex">
          <Square value={board[0][0]} onClick={() => handleClick(0, 0)} />
          <Square value={board[0][1]} onClick={() => handleClick(0, 1)} />
          <Square value={board[0][2]} onClick={() => handleClick(0, 2)} />
        </div>
        <div className="board-row flex">
          <Square value={board[1][0]} onClick={() => handleClick(1, 0)} />
          <Square value={board[1][1]} onClick={() => handleClick(1, 1)} />
          <Square value={board[1][2]} onClick={() => handleClick(1, 2)} />
        </div>
        <div className="board-row flex">
          <Square value={board[2][0]} onClick={() => handleClick(2, 0)} />
          <Square value={board[2][1]} onClick={() => handleClick(2, 1)} />
          <Square value={board[2][2]} onClick={() => handleClick(2, 2)} />
        </div>
      </>

      <div className="text-xl">{status}</div>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={restart}
      >
        Почати знову
      </button>
    </div>
  );
};

export default Board;
