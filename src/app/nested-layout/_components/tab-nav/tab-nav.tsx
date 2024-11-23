"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { UlStyle } from "./tab-nav.css";

const navList = [
  {
    label: "중첩된 레이아웃 페이지",
    segment: "nested-page",
    href: "/nested-layout/nested-page",
  },
  {
    label: "중첩되지 않은 레이아웃 페이지",
    segment: "unnested-page",
    href: "/nested-layout/unnested-page",
  },
];

export default function TabNav() {
  const segment = useSelectedLayoutSegment();
  const selectedColor = (currentSegment: string) => {
    return segment === currentSegment
      ? "font-bold text-blue-500"
      : "text-gray-500";
  };
  return (
    <nav>
      <ul className={UlStyle}>
        {navList.map((nav) => (
          <li key={nav.href}>
            <Link href={nav.href} className={`${selectedColor(nav.segment)}`}>
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
