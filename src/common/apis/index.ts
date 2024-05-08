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
