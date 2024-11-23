import { textStyles } from "./text.css";

export default function Text({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className={textStyles()}>{children}</p>;
}
