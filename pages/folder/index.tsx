import { ReactNode } from "react";
import { GetServerSideProps } from "next";

import { RootLayout } from "@/src/components";
import { getLinksData, getUserData } from "@/src/apis";
import { ROUTER } from "@/src/constants";
import { Folder } from "@/src/components/folder";

import type { LinksData, User } from "@/src/types/type";
import { QueryClient } from "@tanstack/react-query";

interface FolderPageProps {
  LinksData?: LinksData;
}

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function FolderPage({ LinksData }: FolderPageProps) {
  return (
    <>
      <Folder LinksData={LinksData} />
    </>
  );
}

FolderPage.getLayout = function getLayout({ page, userData }: getLayoutProps) {
  return <RootLayout userData={userData}>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const token = context.req.cookies.accessToken;

  if (!token) {
    return {
      redirect: {
        destination: ROUTER.SIGN_IN,
        permanent: false,
      },
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
