import { style } from "@vanilla-extract/css";

export const inputStyle = style({
  padding: "10px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "200px",
  boxSizing: "border-box",
});

export const buttonStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 500,
  fontSize: "16px",
  padding: "0.7em 1.4em 0.7em 1.1em",
  color: "white",
  background:
    "linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%)",
  border: "none",
  boxShadow: "0 0.7em 1.5em -0.5em #14a73e98",
  cursor: "pointer",
  borderRadius: "16px",
  width: "100px",
});
