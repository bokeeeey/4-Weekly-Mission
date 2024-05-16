import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import RootLayout from "../RootLayout";
import { getLinksData, getUserData } from "@/src/apis";
import type { LinksData, User } from "@/src/types/type";
import { ROUTER } from "@/src/constants";
import { Folder } from "@/src/components/folder";

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
  const token = context.req.cookies.accessToken;

  if (!token) {
    return {
      redirect: {
        destination: ROUTER.SIGN_IN,
        permanent: false,
      },
    };
  }

  try {
    const userData = await getUserData(token);
    if (!userData || userData.length === 0) {
      return { props: { userData: [] } };
    }

    // const userId = userData[0].id;
    const LinksData = await getLinksData(token);

    return {
      props: { LinksData, userData },
    };
  } catch {
    return {
      props: { userData: [] },
    };
  }
};
