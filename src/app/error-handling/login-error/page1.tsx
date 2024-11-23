"use client";

import { useActionState } from "react";
import { ActionState, authenticateUser } from "./action";

const initialState: ActionState = {
  message: "",
};

export default function LoginPage() {
  const [state, formAction] = useActionState(authenticateUser, initialState);

  return (
    <section>
      <form action={formAction}>
        <div>
          <label htmlFor="userId">아이디:</label>
          <input type="text" id="userId" name="userId" required />
        </div>
        <div>
          <label htmlFor="password">패스워드:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">로그인</button>
      </form>
      {state.message && <p>{state.message}</p>}
    </section>
  );
}
