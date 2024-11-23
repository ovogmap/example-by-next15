import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const UlStyle = style({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
});

export const LiStyle = recipe({
  base: {
    padding: "4px 12px",
    borderRadius: "6px",
  },
  variants: {
    selected: {
      true: {
        color: "#fff",
        background: "#0070f3",
      },
      false: {
        color: "#fff",
        background: "#3f3f46",
        ":hover": {
          background: "#71717a",
        },
      },
    },
  },
});
