const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

const rowLength = maze.length;
const colLength = maze[0].length;

const directions = [
  ["D", { x: 1, y: 0 }],
  ["U", { x: -1, y: 0 }],
  ["L", { x: 0, y: -1 }],
  ["R", { x: 0, y: 1 }],
];

function isValid(maze, row, col, rowLen, colLen) {
  if (
    row < rowLen &&
    col < colLen &&
    row >= 0 &&
    col >= 0 &&
    maze[row][col] === 1
  ) {
    return true;
  }
}

function solve(x, y, maze, rowLen, colLen, currentPath, result, directions) {
  if (x === rowLen - 1 && y === colLen - 1) {
    result.push(currentPath);
    return;
  }

  maze[x][y] = 0;

  for (let dir of directions) {
    const nextX = x + dir[1].x;
    const nextY = y + dir[1].y;
    if (isValid(maze, nextX, nextY, rowLen, colLen)) {
      solve(
        nextX,
        nextY,
        maze,
        rowLen,
        colLen,
        currentPath + dir[0],
        result,
        directions,
      );
    }
  }
  maze[x][y] = 1;
}

const result = [];

solve(0, 0, maze, rowLength, colLength, "", result, directions);
console.log(result);
