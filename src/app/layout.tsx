import { AddressBar } from "./_components/address-bar/address-bar";
import RootNav from "./_components/root-nav/root-nav";
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
          <main className={RootMain}>
            <AddressBar />
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
