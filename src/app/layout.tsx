import RootNav from "./_common/_components/root-nav/root-nav";
import "./reset.css";
import { RootBody, RootMain, RootSection } from "./styles.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={RootBody}>
        <section className={RootSection}>
          <RootNav />
          <main className={RootMain}>{children}</main>
        </section>
      </body>
    </html>
  );
}
