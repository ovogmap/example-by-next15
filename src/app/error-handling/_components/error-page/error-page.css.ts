import { style } from "@vanilla-extract/css";

export const Container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
  borderRadius: "6px",
  padding: "26px 20px",
  border: "1px dashed #ff0080",
  color: "#ff0080",
});

export const ResetButton = style({
  width: "fit-content",
  padding: "4px 12px",
  borderRadius: "6px",
  background: "#ff0080",
  color: "#fff",
  cursor: "pointer",
  transition: "background 0.3s",
  ":hover": {
    background: "#ff0055",
  },
});

export const ErrorTag = style({
  position: "absolute",
  top: "-8.75px",
  left: "20px",
  width: "fit-content",
  fontSize: "9px",
  padding: "2px 6px",
  background: "#ff0080",
  color: "#fff",
  borderRadius: "10px",
});
