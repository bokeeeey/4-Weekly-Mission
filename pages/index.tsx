import { ReactNode } from "react";
import { GetServerSideProps } from "next";

import { LandingContainer, LandingHeader, RootLayout } from "@/src/components";
import type { User } from "@/src/types/type";
import { getUserData } from "@/src/apis";

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function Home() {
  return (
    <>
      <LandingHeader />
      <LandingContainer />
    </>
  );
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
