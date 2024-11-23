import { ChildrenTag, Container } from "./children-layout.css";

export default function ChildrenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={Container}>
      <span className={ChildrenTag}>CHILDREN</span>
      {children}
    </section>
  );
}
