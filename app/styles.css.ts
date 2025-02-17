import { globalStyle, style } from "@vanilla-extract/css";

export const globalContainer = style({
  height: "100vh",
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  height: "100%",
});
