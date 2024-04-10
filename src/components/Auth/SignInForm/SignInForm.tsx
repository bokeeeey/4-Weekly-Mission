"use client";
import { LinkbraryIcon } from "@/src/asset";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "./SignInForm.module.scss";
import { EMAIL_REGEX } from "@/src/constants/regex";

interface FieldValues {
  email: string;
  password: string;

  // error 객체는 따로 분리해보고 싶었습니다
  emailError?: string;
  passwordError?: string;
}

export default function SignInForm() {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onBlur" });
  return (
    <div className={styles.signForm}>
      <div className={styles.logoBox}>
        <Link href="/">
          <LinkbraryIcon width="212" height="38" />
        </Link>
        <div className={styles.logoBox__text}>
          <p>회원이 아니신가요?</p>
          <Link href="/signup">회원 가입하기</Link>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요."
            {...register("emailError", {
              required: "이메일을 입력해 주세요.",
              pattern: {
                value: EMAIL_REGEX,
                message: "올바른 이메일 주소가 아닙니다.",
              },
            })}
          />
          {errors.emailError?.message && (
            <div className={styles.errorMessage}>
              {errors.emailError?.message}
            </div>
          )}
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            {...register("passwordError", {
              required: "비밀번호를 입력해 주세요",
            })}
          />
          {errors.passwordError?.message && (
            <div className={styles.errorMessage}>
              {errors.passwordError?.message}
            </div>
          )}
        </div>
        <button>로그인</button>
      </form>
    </div>
  );
}
