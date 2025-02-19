import { FindGraphs } from "./Find-Graphs";

export const FindClusters = (grid: number[][]): Set<string>[] => {
  // now for finding clusters, which are essentially just graphs that are not connected to each.
  let visitedGrid = new Set<string>();
  let graph: Set<string>[] = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visitedGrid.has(`${i}-${j}`)) {
        let newGraph = FindGraphs(grid, i, j);
        newGraph.forEach((cell) => visitedGrid.add(cell));
        graph.push(newGraph);
      }
    }
  }
  return graph.sort((a, b) => b.size - a.size);
};
