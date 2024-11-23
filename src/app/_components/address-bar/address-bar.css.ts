import { style } from "@vanilla-extract/css";

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
});

export const AddressBarTextWrapper = style({
  display: "flex",
  alignItems: "center",
});
