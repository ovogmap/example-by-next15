import { style } from "@vanilla-extract/css";

export const RootBody = style({
  width: "100vw",
  height: "100vh",
});

export const RootSection = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
});

export const RootMain = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "30px",
});
