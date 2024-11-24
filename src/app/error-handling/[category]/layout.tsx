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
            href: `/error-handling/${category}`,
          },
          {
            label: "Phones",
            segment: "phones",
            href: `/error-handling/${category}/phones`,
          },
          {
            label: "Tablets",
            segment: "tablets",
            href: `/error-handling/${category}/tablets`,
          },
          {
            label: "Laptops",
            segment: "laptops",
            href: `/error-handling/${category}/laptops`,
          },
        ]}
      />
      {children}
    </ChildrenLayout>
  );
}
