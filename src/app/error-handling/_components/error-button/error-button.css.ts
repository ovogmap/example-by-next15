import { style } from "@vanilla-extract/css";

export const ErrorButtonStyles = style({
  width: "fit-content",
  fontSize: "14px",
  padding: "4px 12px",
  borderRadius: "6px",
  background: "#ff0080",
  color: "#fef2f2",
  border: "none",
  cursor: "pointer",
  ":hover": {
    background: "#db2777",
  },
});
