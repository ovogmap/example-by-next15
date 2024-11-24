"use client";

import { useParams } from "next/navigation";
import Title from "./title/title";

export default function CurrentSegmentTitle({
  taget,
}: Readonly<{ taget: string }>) {
  const params = useParams();
  const currentParam = params?.[taget];
  return <Title>{currentParam}</Title>;
}
