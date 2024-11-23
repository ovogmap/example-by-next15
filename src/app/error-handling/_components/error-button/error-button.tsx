"use client";
import { useState } from "react";
import { ErrorButtonStyles } from "./error-button.css";

export default function ErrorButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error("에러 발생");
  }

  return (
    <button className={ErrorButtonStyles} onClick={() => setClicked(true)}>
      Trigger Error
    </button>
  );
}
