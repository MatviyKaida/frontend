const calculateWinner = (board, row, col) => {
    const player = board[row][col];
    const size = board.length;
    let winCombo = [];
  
    // перевірка рядка
    if (board[row].every((cell) => cell === player)) {
      winCombo = board[row].map((_, i) => [row, i]);
      return { winner: player, combo: winCombo };
    }
  
    // перевірка стовпця
    if (board.every((r) => r[col] === player)) {
      winCombo = board.map((_, i) => [i, col]);
      return { winner: player, combo: winCombo };
    }
  
    // головна діагональ
    if (row === col && board.every((r, i) => r[i] === player)) {
      winCombo = board.map((_, i) => [i, i]);
      return { winner: player, combo: winCombo };
    }
  
    // побічна діагональ
    if (row + col === size - 1 && board.every((r, i) => r[size - 1 - i] === player)) {
      winCombo = board.map((_, i) => [i, size - 1 - i]);
      return { winner: player, combo: winCombo };
    }
  
    return null;
  };
  
  export default calculateWinner;
  