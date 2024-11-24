import { keyframes, style } from "@vanilla-extract/css";

const borderColorChange = keyframes({
  "0%": { borderColor: "#00000033" },
  "50%": { borderColor: "red" },
  "100%": { borderColor: "#00000033" },
});

export const Container = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  borderRadius: "6px",
  padding: "26px 20px",
  position: "relative",
  border: "1px dashed #00000033",
  animation: `${borderColorChange} 0.5s linear 1 forwards`,
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
