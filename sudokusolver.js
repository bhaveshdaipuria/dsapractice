const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }
  let startRow = Math.trunc(row / 3) * 3;
  let startCol = Math.trunc(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function solution(board) {
  const backtrack = (updatedBoard) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (updatedBoard[i][j] === ".") {
          for (let num = 1; num <= 9; num++) {
            const numString = num.toString();
            if (isValid(updatedBoard, i, j, numString)) {
              updatedBoard[i][j] = numString;
              if (backtrack(updatedBoard)) {
                return true;
              }
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  };
  backtrack(board);
}

solution(board);
console.log(board)
