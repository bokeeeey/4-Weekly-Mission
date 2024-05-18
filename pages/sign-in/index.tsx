import classNames from "classnames/bind";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { LinkBox, LogoBox, SignInForm } from "@/src/components";
import { ROUTER } from "@/src/constants";

import styles from "./SignInPage.module.scss";

const cn = classNames.bind(styles);

export default function SignInPage() {
  const router = useRouter();

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req?.cookies.accessToken;

  if (token) {
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