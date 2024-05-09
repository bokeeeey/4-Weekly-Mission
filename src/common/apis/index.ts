import { FieldValues } from "react-hook-form";

export async function postSignIn(payload: FieldValues) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error();
    }

    return result;
  } catch (error) {
    console.error("postSignIn 실패", error);
    throw error;
  }
}

export async function postSignUp(payload: FieldValues) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-up`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error();
    }

    return result;
  } catch (error) {
    console.error("postSignUp 실패", error);
    throw error;
  }
}

export async function checkEmail(email: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/check-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return error;
    }

    return await response.json();
  } catch (error) {
    console.error("checkEmail 실패", error);
    throw error;
  }
}
