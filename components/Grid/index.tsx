"use client";
import { useMatrixSizeStore } from "@/zustand/useMatrixSizeStore";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./styles.css";
import Flex from "../Core/Flex";
import { FindClusters } from "@/utils/Find-Clusters";
import { FindGraphs } from "@/utils/Find-Graphs";

export const Grid = () => {
  const { matrixSizeCols, matrixSizeRows } = useMatrixSizeStore();
  const [grid, setGrid] = useState<number[][]>([]);
  const clusters = FindClusters(grid);
  // result holds the different clusters as array of sets. Each set hold
  const handleBalloonPop = (x: number, y: number) => {
    // get coordinates and try to pop the balloon first
    // if balloon is popped, check if it is in the biggest cluster and remove that cluster from the set.
    const clickedGraph = FindGraphs(grid, x, y);
    if (clickedGraph.size !== clusters[0].size) {
      alert("Game Over!");
      return;
    }
    // remove the cluster from the set and update grid
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        if (clickedGraph.has(`${rowIndex}-${colIndex}`)) {
          return 0;
        }
        return cell;
      })
    );
    setGrid(newGrid);
    // check if game has finished.
    if (clusters.length === 1) {
    }
  };
  useEffect(() => {
    // fill grid with balloons. Balloon will indicate 1, and empty will indicate 0. Balloons will be randomly placed 65%
    const generateGrid = (): number[][] => {
      return Array.from({ length: matrixSizeRows }, () =>
        Array.from({ length: matrixSizeCols }, () =>
          Math.random() > 0.35 ? 1 : 0
        )
      );
    };
    setGrid(generateGrid());
  }, []);

  return (
    <div
      className={S.gridContainer}
      style={assignInlineVars({
        [S.gridColumnSize]: String(matrixSizeCols),
        [S.gridRowSize]: String(matrixSizeRows),
      })}
    >
      {grid.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Flex
            key={`${rowIndex}-${colIndex}`}
            className={S.gridCell}
            justify="center"
            items="center"
            onClick={() => handleBalloonPop(rowIndex, colIndex)}
          >
            {cell === 1 ? "🎈" : ""}
          </Flex>
        ))
      )}
    </div>
  );
};
