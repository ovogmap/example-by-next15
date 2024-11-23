"use client";

import { getCatPhoto } from "@/app/actions/get-cat-photo";
import Image from "next/image";
import { useActionState } from "react";

const initialState = {
  message: "",
  url: "",
};
export default function CatImageForm() {
  const [state, formAction, isPending] = useActionState(
    getCatPhoto,
    initialState
  );
  return (
    <>
      <form action={formAction}>
        <button type="submit">고양이 사진 가져오기</button>
        {state?.message && <p>{state.message}</p>}
        {state?.url && !isPending && (
          <Image width={300} height={300} src={state.url} alt="고양이 사진" />
        )}
        {isPending && <p>로딩중...</p>}
      </form>
    </>
  );
}
