import { TitleStyles } from "./title.css";

export default function Title({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h2 className={TitleStyles}>{children}</h2>;
}
