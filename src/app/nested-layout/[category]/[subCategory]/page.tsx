import CurrentSegmentTitle from "@/app/_components/current-segment-title";
import SkeletonCard from "@/app/_components/skeleton-card/skeleton-card";
import { SkeletonBarWrapper } from "./styles.css";

export default function Page() {
  return (
    <>
      <CurrentSegmentTitle taget="subCategory" />
      <p>레이아웃이 중첩 되었다!</p>
      <div className={SkeletonBarWrapper}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  );
}
