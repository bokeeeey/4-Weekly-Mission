"use client";
import { LinkbraryIcon } from "@/src/asset";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "./InputField/InputField";
import styles from "./AuthHookForm.module.scss";

export default function AuthHookForm() {
  const { handleSubmit } = useForm();
  // register : value 관련
  // watch : input 상태감지
  // formState : submit error 감지

  return (
    <main className={styles.authForm}>
      <header className={styles.header}>
        <Link href={"/"}>
          <LinkbraryIcon width="212" height="38" />
        </Link>
        <div className={styles.header__text}>
          <p>회원이 아니신가요?</p>
          <Link href={"/signup"}>회원 가입하기</Link>
        </div>
      </header>
      <section>
        <form>
          <InputField type="email" name="이메일" label={true} />
          <InputField
            type="password"
            name="비밀번호"
            icon="eyeToggle"
            label={true}
          />
          <button type="submit">테스트 버튼</button>
        </form>
      </section>
      <section>소셜로그인</section>
    </main>
  );
}
