import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import { QueryClient } from "@tanstack/react-query";

import { Folder, RootLayout } from "@/src/components";
import { getFoldersData, getLinksData, getUserData } from "@/src/apis";
import { ROUTER } from "@/src/constants";

import type { Favorite, TLink, User } from "@/src/types/type";

interface FolderPageProps {
  favorites?: Favorite[];
  linksData?: TLink[];
}

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function FolderPage({ favorites, linksData }: FolderPageProps) {
  return (
    <>
      <Folder favorites={favorites} linksData={linksData} />
    </>
  );
}

FolderPage.getLayout = function getLayout({ page, userData }: getLayoutProps) {
  return <RootLayout userData={userData}>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const token = context.req?.cookies.accessToken;

  // 토큰이 없는경우 예외처리
  if (!token) {
    return {
      redirect: {
        destination: ROUTER.SIGN_IN,
        permanent: false,
      },
    };
  }

  // userData를 받아서 header, GNB로 전달
  await queryClient.prefetchQuery({
    queryKey: ["accessToken"],
    queryFn: () => getUserData(token),
  });

  const userData = queryClient.getQueryData(["accessToken"]);

  // Folder List를 받아서 FavoriteButton으로 전달
  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFoldersData(token),
  });

  const favorites = queryClient.getQueryData(["favorites"]);

  // LinksData를 받아서 LinkList로 전달
  await queryClient.prefetchQuery({
    queryKey: ["linksData"],
    queryFn: () => getLinksData(token),
  });

  const linksData = queryClient.getQueryData(["linksData"]);

  return {
    props: {
      userData: userData || null,
      favorites: favorites || null,
      linksData: linksData || null,
    },
  };
};
