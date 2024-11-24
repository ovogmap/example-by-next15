import { SkeletonBar, SkeletonCardContainer } from "./skeleton-card.css";

export default function SkeletonCard() {
  return (
    <div className={SkeletonCardContainer}>
      <div
        className={SkeletonBar}
        style={{
          height: "40px",
        }}
      />
      <div
        className={SkeletonBar}
        style={{
          height: "10px",
        }}
      />
      <div
        className={SkeletonBar}
        style={{
          height: "10px",
        }}
      />
    </div>
  );
}
