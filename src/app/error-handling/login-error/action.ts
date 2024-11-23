"use server";

export type ActionState = {
  username?: string;
  password?: string;
  message?: string;
};
export const authenticateUser = async (
  _: ActionState,
  formData: FormData
): Promise<ActionState> => {
  // 실제 인증 로직을 여기에 구현합니다.
  // 예시로 간단한 조건문을 사용합니다.
  const userId = formData.get("userId");
  const password = formData.get("password");

  if (userId === "admin" && password === "admin") {
    return { message: "로그인 성공" };
  } else {
    return { message: "로그인 실패" };
  }
};
