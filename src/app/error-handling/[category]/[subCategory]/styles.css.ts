import { style } from "@vanilla-extract/css";

export const SkeletonBarWrapper = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto 100px",
  gap: "10px",
});
