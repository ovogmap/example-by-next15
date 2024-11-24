import CurrentSegmentTitle from "@/app/_components/current-segment-title";
import SkeletonCard from "@/app/_components/skeleton-card/skeleton-card";
import ErrorButton from "../../_components/error-button/error-button";
import { SkeletonBarWrapper } from "./styles.css";

export default function Page() {
  return (
    <>
      <CurrentSegmentTitle taget="subCategory" />
      <ErrorButton />
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
