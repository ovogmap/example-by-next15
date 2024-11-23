import SectionLayout from "../_common/_components/section-layout/section-layout";

export default function ErrorHandlingLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <SectionLayout title="Error Handling">{children}</SectionLayout>;
}
