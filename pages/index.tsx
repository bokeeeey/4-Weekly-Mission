import { ReactNode } from "react";
import { Landing, RootLayout } from "@/src/layout";
import { GetServerSideProps } from "next";
import type { User } from "@/src/common/constants/type";
import { getUserData } from "@/src/common/apis";

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function Home() {
  return <Landing />;
}

Home.getLayout = function getLayout({ page, userData }: getLayoutProps) {
  return <RootLayout userData={userData}>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req?.cookies.accessToken;

  if (!token) {
    return {
      props: { userData: null },
    };
  }

  try {
    const userData = await getUserData(token);

    return {
      props: { userData },
    };
  } catch {
    return {
      props: { userData: null },
    };
  }
};
