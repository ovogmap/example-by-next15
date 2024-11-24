import { keyframes, style } from "@vanilla-extract/css";

const borderColorChange = keyframes({
  "0%": { borderColor: "#00000033" },
  "50%": { borderColor: "red" },
  "100%": { borderColor: "#00000033" },
});

export const AddressBarStyles = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  fontWeight: "700",
  marginBottom: "20px",
  width: "100%",
  height: "50px",
  borderRadius: "6px",
  border: "1px solid #00000033",
  animation: `${borderColorChange} 0.5s linear 1 forwards`,
});

export const AddressBarTextWrapper = style({
  display: "flex",
  alignItems: "center",
});
