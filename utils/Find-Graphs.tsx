export const FindGraphs = (
  grid: number[][],
  x: number,
  y: number,
  visited: Set<string> = new Set()
) => {
  // grid is the grid of balloons. x is the x coordinate and y is y coordinate. visited is used for DFS
  // visited will track if the cell has been visited or not to prevent counting same coordinates
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];
  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[0].length ||
    grid[x][y] !== 1 ||
    visited.has(`${x}-${y}`)
  ) {
    return visited;
  }
  visited.add(`${x}-${y}`);
  directions.forEach(([dirxml, dy]) => {
    FindGraphs(grid, x + dirxml, y + dy, visited);
  });
  return visited;
};
