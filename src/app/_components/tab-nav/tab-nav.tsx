"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { LiStyle, UlStyle } from "./tab-nav.css";

export default function TabNav({
  navList,
}: {
  navList: { label: string; segment: string; href: string }[];
}) {
  const segment = useSelectedLayoutSegment();
  const selectedColor = (currentSegment: string) => {
    return segment === currentSegment;
  };
  return (
    <nav>
      <ul className={UlStyle}>
        {navList.map((nav, i) => (
          <li key={nav.href}>
            <Link
              className={LiStyle({
                selected:
                  i === 0
                    ? segment === null
                      ? true
                      : false
                    : selectedColor(nav.segment),
              })}
              href={nav.href}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
