export default function Title({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <h2 className="text-3xl font-bold">{children}</h2>;
}
