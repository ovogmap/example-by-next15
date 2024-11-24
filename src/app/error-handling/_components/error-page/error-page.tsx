"use client";

import { Container, ErrorTag, ResetButton } from "./error-page.css";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className={Container}>
      <span className={ErrorTag}>ERROR</span>
      <h2 style={{ fontWeight: 700 }}>Error</h2>
      <p>Oh no! Something went wrong.</p>
      <p>error: {error.message}</p>
      <button onClick={reset} className={ResetButton}>
        Try Again
      </button>
    </section>
  );
}
