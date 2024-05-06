import classNames from "classnames/bind";
import { LogoBox, SignInForm } from "@/src/layout/auth";
import { ROUTER } from "@/src/common/constants";

import styles from "./SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignInPage() {
  return (
    <main className={cn("page")}>
      <LogoBox
        text="회원이 아니신가요?"
        href={ROUTER.SIGN_UP}
        hrefText="회원 가입하기"
      />
      <SignInForm />
    </main>
  );
}
