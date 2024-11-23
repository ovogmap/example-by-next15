import { style } from "@vanilla-extract/css";

export const Container = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  borderRadius: "6px",
  border: "1px dashed #00000033",
  padding: "20px",
  position: "relative",
});

export const ChildrenTag = style({
  position: "absolute",
  top: "-8.75px",
  left: "20px",
  width: "fit-content",
  fontSize: "9px",
  padding: "2px 6px",
  background: "#27272a",
  color: "#fff",
  borderRadius: "10px",
});
