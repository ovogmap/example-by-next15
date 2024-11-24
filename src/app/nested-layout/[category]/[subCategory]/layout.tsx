import ChildrenLayout from "@/app/_components/cildren-layout/children-layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ChildrenLayout>{children}</ChildrenLayout>;
}
