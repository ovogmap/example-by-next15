import ChildrenLayout from "../_components/cildren-layout/children-layout";
import SectionLayout from "../_components/section-layout/section-layout";

export default function Layout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <SectionLayout title="parallel routes">
      <ChildrenLayout>{children}</ChildrenLayout>
    </SectionLayout>
  );
}
