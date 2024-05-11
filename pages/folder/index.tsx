import { useRouter } from "next/router";
import { ROUTER } from "@/src/common/constants";
import { ReactNode } from "react";
import RootLayout from "../RootLayout";
import { GetServerSideProps } from "next";

export default function FolderPage() {
  const router = useRouter();

  return (
    <div>
      <div>폴더페이지 입니다</div>
    </div>
  );
}

FolderPage.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.accessToken;

  if (!token) {
    return {
      redirect: {
        destination: ROUTER.SIGN_IN,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
