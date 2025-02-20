import { style, createVar } from "@vanilla-extract/css";

export const gridColumnSize = createVar();
export const gridRowSize = createVar();
export const gridContainer = style({
  display: "grid",
  gridTemplateColumns: `repeat(${gridColumnSize}, 1fr)`,
  gridTemplateRows: `repeat(${gridRowSize}, 1fr)`,
  justifyContent: "center",
  border: "2px solid black",
  width: "60vw",
  height: "60vh",
});

export const gridCell = style({
  border: "1px solid black",
  fontSize: "3.5vw",
});
