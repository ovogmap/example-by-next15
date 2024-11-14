export default function Callout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-fit shadow-lg rounded-[4px] bg-sky-50 py-[8px] px-[14px]">
      <span className="text-sm">{children}</span>
    </div>
  );
}
