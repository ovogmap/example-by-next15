"use client";
import TabNav from "@/app/_components/tab-nav/tab-nav";
import { useParams } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const params = useParams();
  const { category } = params;
  console.log("params,", params);
  return (
    <section>
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
      <div style={{ marginTop: "30px" }}>{children}</div>
    </section>
  );
}
