import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";

import { LandingContainer, LandingHeader, RootLayout } from "@/src/components";
import { getUserData } from "@/src/apis";
import type { User } from "@/src/types/type";

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
  dehydrateState: DehydratedState;
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
  const queryClient = new QueryClient();
  const token = context.req?.cookies.accessToken;

  if (!token) {
    return {
      props: { userData: null },
    };
  }

  await queryClient.prefetchQuery({
    queryKey: ["accessToken"],
    queryFn: () => getUserData(token),
  });

  const userData = queryClient.getQueryData(["accessToken"]);

  return {
    props: {
      userData: userData || null,
    },
  };
};
