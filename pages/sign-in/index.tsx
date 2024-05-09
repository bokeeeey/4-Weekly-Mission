import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { LinkBox, LogoBox, SignInForm } from "@/src/layout/auth";
import { ROUTER } from "@/src/common/constants";

import styles from "./SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignInPage() {
  const router = useRouter();

  const token = localStorage.getItem("accessToken");

  if (token) {
    router.push(ROUTER.FOLDER);
  }

  return (
    <main className={cn("page")}>
      <LogoBox
        text="회원이 아니신가요?"
        href={ROUTER.SIGN_UP}
        hrefText="회원 가입하기"
      />
      <SignInForm />
      <LinkBox text="소셜 로그인" />
    </main>
  );
}
