import Title from "../title/title";
import { container } from "./section-layout.styles.css";

export default function SectionLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className={container}>
      <Title>{title}</Title>
      {children}
    </section>
  );
}
