import { recipe } from "@vanilla-extract/recipes";

export const gap = {
  none: { gap: "0" },
  "2": { gap: "2px" },
  "4": { gap: "4px" },
  "8": { gap: "8px" },
  "12": { gap: "12px" },
  "16": { gap: "16px" },
  "20": { gap: "20px" },
  "24": { gap: "24px" },
  "32": { gap: "32px" },
  "40": { gap: "40px" },
  "48": { gap: "48px" },
  "56": { gap: "56px" },
  "64": { gap: "64px" },
};

const flex = recipe({
  base: {
    display: "flex",
  },
  variants: {
    flexDirection: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      "row-reverse": {
        flexDirection: "row-reverse",
      },
      "column-reverse": {
        flexDirection: "column-reverse",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
    },
    items: {
      "flex-start": {
        alignItems: "flex-start",
      },
      "flex-end": {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
      baseline: {
        alignItems: "baseline",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    gap: gap,
    wrap: {
      nowrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
    },
  },
  defaultVariants: {
    flexDirection: "row",
    justify: "start",
    items: "stretch",
    gap: "none",
    wrap: "nowrap",
  },
});

export default flex;
