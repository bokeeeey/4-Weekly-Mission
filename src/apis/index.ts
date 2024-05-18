import { FieldValues } from "react-hook-form";

// sign-in
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

// sign-up
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

// 이메일 중복 check
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

    return await response.json();
  } catch (error) {
    console.error("checkEmail 실패", error);
    throw error;
  }
}

// userData
export async function getUserData(token: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("getUserData 실패", error);
    throw error;
  }
}

// FoderList Data
export async function getFoldersData(token: string) {
  try {
    const respoese = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/folders`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return await respoese.json();
  } catch (error) {
    console.error("getFoldersData 실패", error);
    throw error;
  }
}

// LinkList Data
export async function getLinksData(token: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/links`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return await response.json();
  } catch (error) {
    console.error("getLinksData 실패", error);
    throw error;
  }
}
