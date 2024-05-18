import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import { QueryClient } from "@tanstack/react-query";

import { Folder, RootLayout } from "@/src/components";
import { getFoldersData, getUserData } from "@/src/apis";
import { ROUTER } from "@/src/constants";

import type { Favorite, User } from "@/src/types/type";

interface FolderPageProps {
  favorites?: Favorite[];
}

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function FolderPage({ favorites }: FolderPageProps) {
  return (
    <>
      <Folder favorites={favorites} />
    </>
  );
}

FolderPage.getLayout = function getLayout({ page, userData }: getLayoutProps) {
  return <RootLayout userData={userData}>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const token = context.req?.cookies.accessToken;

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

  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFoldersData(token),
  });

  const favorites = queryClient.getQueryData(["favorites"]);

  return {
    props: {
      userData: userData || null,
      favorites: favorites || null,
    },
  };
};
