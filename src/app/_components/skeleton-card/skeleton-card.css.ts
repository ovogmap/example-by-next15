import { createVar, style } from "@vanilla-extract/css";

export const skeletonBarHeight = createVar();

export const SkeletonCardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "14px",
  width: "100%",
  height: "100%",
  borderRadius: "6px",
  backgroundColor: "#18181bcc",
});

export const SkeletonBar = style({
  width: "100%",
  borderRadius: "6px",
  backgroundColor: "#6a6a6e",
});
