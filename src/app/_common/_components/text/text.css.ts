import { recipe } from "@vanilla-extract/recipes";

export const textStyles = recipe({
  base: {
    fontSize: "14px",
    color: "#333",
  },
  variants: {
    bold: {
      fontWeight: "bold",
    },
  },
});
