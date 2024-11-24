import CurrentSegmentTitle from "@/app/_components/current-segment-title";
import Title from "@/app/_components/title/title";

export default function NestedPage() {
  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <Title>All</Title>
        <CurrentSegmentTitle taget="category" />
      </div>
      <p>레이아웃이 중첩 되었다!</p>
    </>
  );
}
