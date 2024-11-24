"use client";

import Link from "next/link";
import { LinkStyle, LiUlStlye, NavStlye, UlStlye } from "./root-nav.css";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "nested-layout",
    href: "/nested-layout",
  },
  {
    name: "error-handling",
    href: "/error-handling",
  },
  {
    name: "parallel-routes",
    href: "/parallel-routes",
  },
];

export default function RootNav() {
  // const currnetSegment = useSelectedLayoutSegment();
  return (
    <nav className={NavStlye}>
      <ul className={UlStlye}>
        {navList.map((nav) => (
          <li className={LiUlStlye} key={nav.name}>
            <Link className={LinkStyle} href={nav.href}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
