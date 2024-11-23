"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section>
      <p>비상~ 비상~ 에러 발생~ 웨에에에에에에엥@@@</p>
      <p>error code: {error.message}</p>
      <button onClick={reset}>새로고침</button>
    </section>
  );
}
