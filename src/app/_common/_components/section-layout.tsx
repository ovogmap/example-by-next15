import Title from "./title";

export default function SectionLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <section className="flex flex-col gap-[20px]">
      <Title>{title}</Title>
      {children}
    </section>
  );
}
