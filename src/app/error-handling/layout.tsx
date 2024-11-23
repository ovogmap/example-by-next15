import ChildrenLayout from "../_components/cildren-layout/children-layout";
import SectionLayout from "../_components/section-layout/section-layout";
import TabNav from "../_components/tab-nav/tab-nav";

export default function ErrorHandlingLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <SectionLayout title="Error Handling">
      <TabNav
        navList={[
          {
            label: "Home",
            segment: "home",
            href: "/error-handling",
          },
          {
            label: "Electronics",
            segment: "electronics",
            href: "/error-handling/electronics",
          },
          {
            label: "Clothing",
            segment: "clothing",
            href: "/error-handling/clothing",
          },
          {
            label: "Books",
            segment: "books",
            href: "/error-handling/books",
          },
        ]}
      />
      <ChildrenLayout>{children}</ChildrenLayout>
    </SectionLayout>
  );
}
