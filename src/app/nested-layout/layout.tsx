import Callout from "../_common/_components/callout";
import SectionLayout from "../_common/_components/section-layout/section-layout";
import Nav from "./_components/nav";

export default function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SectionLayout title="nested layout">
      <>
        <Nav />
        <Callout>레이아웃을 사용해 공통 UI를 사용 할 수 있어요</Callout>
        <main>{children}</main>
      </>
    </SectionLayout>
  );
}
