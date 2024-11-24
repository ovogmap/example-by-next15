import Callout from "../_components/callout/callout";
import SectionLayout from "../_components/section-layout/section-layout";
import TabNav from "../_components/tab-nav/tab-nav";

export default function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SectionLayout title="nested layout">
      <TabNav
        navList={[
          {
            label: "Home",
            segment: "home",
            href: "/nested-layout",
          },
          {
            label: "Electronics",
            segment: "electronics",
            href: "/nested-layout/electronics",
          },
          {
            label: "Clothing",
            segment: "clothing",
            href: "/nested-layout/clothing",
          },
          {
            label: "Books",
            segment: "books",
            href: "/nested-layout/books",
          },
        ]}
      />
      <Callout>레이아웃을 사용해 공통 UI를 사용 할 수 있어요</Callout>
      {children}
    </SectionLayout>
  );
}
