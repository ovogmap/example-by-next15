// styles/reset.css.ts
import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "currentColor",
});

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
  MozTabSize: 4,
  tabSize: 4,
});

globalStyle("body", {
  margin: 0,
  fontFamily: "system-ui, sans-serif",
});

globalStyle("hr", {
  height: 0,
  color: "inherit",
  borderTopWidth: 1,
});

globalStyle("abbr:where([title])", {
  textDecoration: "underline dotted",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("b, strong", {
  fontWeight: "bolder",
});

globalStyle("code, kbd, samp, pre", {
  fontFamily: "ui-monospace, monospace",
  fontSize: "1em",
});

globalStyle("small", {
  fontSize: "80%",
});

globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

globalStyle("table", {
  textIndent: 0,
  borderColor: "inherit",
  borderCollapse: "collapse",
});

globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
  fontWeight: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  margin: 0,
  padding: 0,
});

globalStyle("button, select", {
  textTransform: "none",
});

globalStyle(
  "button[type='button'], button[type='reset'], button[type='submit']",
  {
    WebkitAppearance: "button",
  }
);

globalStyle("::-moz-focus-inner", {
  borderStyle: "none",
  padding: 0,
});

globalStyle(":-moz-focusring", {
  outline: "1px dotted ButtonText",
});

globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

globalStyle("legend", {
  padding: 0,
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalStyle("[type='search']::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalStyle("summary", {
  display: "list-item",
});

globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: 0,
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalStyle("menu, ol, ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

globalStyle("textarea", {
  resize: "vertical",
});

globalStyle("input::placeholder, textarea::placeholder", {
  opacity: 1,
  color: "#9ca3af",
});

globalStyle('button, [role="button"]', {
  cursor: "pointer",
});

globalStyle("table, td, th", {
  borderColor: "#e5e7eb",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("button, input, optgroup, select, textarea", {
  padding: 0,
  lineHeight: "inherit",
  color: "inherit",
});

globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});
