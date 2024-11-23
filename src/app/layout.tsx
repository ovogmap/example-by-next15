"use client";
import Link from "next/link";
import "./globals.css";

const navList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "nested-layout",
    href: "/nested-layout/nested-page",
  },
  {
    name: "error-handling",
    href: "/error-handling",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-screen h-screen">
        <section className="flex flex-row w-full h-full ">
          <nav className="w-[200px] border-r border-r-gray-300 h-full p-[12px]">
            <ul className="w-full">
              {navList.map((nav) => (
                <li className="w-full p-[4px]" key={nav.name}>
                  <Link className="w-full inline-block" href={nav.href}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <main className="p-[30px]">{children}</main>
        </section>
      </body>
    </html>
  );
}
