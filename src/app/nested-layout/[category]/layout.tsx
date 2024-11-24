"use client";
import ChildrenLayout from "@/app/_components/cildren-layout/children-layout";
import TabNav from "@/app/_components/tab-nav/tab-nav";
import { useParams } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const params = useParams();
  const { category } = params;
  console.log("params,", params);
  return (
    <ChildrenLayout>
      <TabNav
        navList={[
          {
            label: "All",
            segment: "all",
            href: `/nested-layout/${category}`,
          },
          {
            label: "Phones",
            segment: "phones",
            href: `/nested-layout/${category}/phones`,
          },
          {
            label: "Tablets",
            segment: "tablets",
            href: `/nested-layout/${category}/tablets`,
          },
          {
            label: "Laptops",
            segment: "laptops",
            href: `/nested-layout/${category}/laptops`,
          },
        ]}
      />
      {children}
    </ChildrenLayout>
  );
}
