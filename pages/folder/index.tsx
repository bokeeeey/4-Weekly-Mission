import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import {
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { Folder, RootLayout } from "@/src/components";
import { getFoldersData, getLinksData, getUserData } from "@/src/apis";
import { ROUTER } from "@/src/constants";
import type { User } from "@/src/types/type";

interface FolderPageProps {
  dehydratedState: DehydratedState;
}

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function FolderPage({ dehydratedState }: FolderPageProps) {
  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <Folder />
      </HydrationBoundary>
    </>
  );
}

FolderPage.getLayout = function getLayout({ page, userData }: getLayoutProps) {
  return <RootLayout userData={userData}>{page}</RootLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const TOKEN = context.req?.cookies.accessToken;

  // 토큰이 없는경우 예외처리
  if (!TOKEN) {
    return {
      redirect: {
        destination: ROUTER.SIGN_IN,
        permanent: false,
      },
    };
  }

  // userData prefetch
  await queryClient.prefetchQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(TOKEN),
  });

  const userData = queryClient.getQueryData(["userData"]);

  // Folder List prefetch
  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFoldersData(TOKEN),
  });

  // LinksData prefetch
  await queryClient.prefetchQuery({
    queryKey: ["linksData"],
    queryFn: () => getLinksData(TOKEN),
  });

  // 캐싱 데이터 dehydrateState로 설정
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      userData: userData || null,
      dehydratedState,
    },
  };
};
