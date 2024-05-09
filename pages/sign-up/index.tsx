import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { LinkBox, LogoBox, SignUpForm } from "@/src/layout/auth";
import { ROUTER } from "@/src/common/constants";

import styles from "../sign-in/SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignUpPage() {
  const router = useRouter();

  const token = localStorage.getItem("accessToken");

  if (token) {
    router.push(ROUTER.FOLDER);
  }

  return (
    <main className={cn("page")}>
      <LogoBox
        text="이미 회원이신가요?"
        href={ROUTER.SIGN_IN}
        hrefText="로그인 하기"
      />
      <SignUpForm />
      <LinkBox text="다른 방식으로 가입하기" />
    </main>
  );
}
