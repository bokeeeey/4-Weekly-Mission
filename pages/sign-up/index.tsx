import classNames from "classnames/bind";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { LinkBox, LogoBox, SignUpForm } from "@/src/components";
import { ROUTER } from "@/src/constants";

import styles from "../sign-in/SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignUpPage() {
  const router = useRouter();

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.accessToken;

  if (token) {
    console.log("넌 이미 token이 있어");
    return {
      redirect: {
        destination: ROUTER.FOLDER,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
