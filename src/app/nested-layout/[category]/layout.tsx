export default function NestedPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <p>*중첩된 레이아웃*</p>
      {children}
    </section>
  );
}
