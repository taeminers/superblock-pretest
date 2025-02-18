"use client";
import { useMatrixSizeStore } from "@/zustand/useMatrixSizeStore";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as S from "./styles.css";
import Flex from "../Core/Flex";

export const Grid = () => {
  const { matrixSizeCols, matrixSizeRows } = useMatrixSizeStore();
  const [grid, setGrid] = useState<number[][]>([]);
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
          >
            {cell === 1 ? "🎈" : ""}
          </Flex>
        ))
      )}
    </div>
  );
};
