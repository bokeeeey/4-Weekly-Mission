import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import RootLayout from "../RootLayout";
import { getUserData } from "@/src/common/apis";
import type { User } from "@/src/common/constants/type";
import { ROUTER } from "@/src/common/constants";

interface FolderPageProps {
  userData?: User[];
}

interface getLayoutProps {
  page: ReactNode;
  userData?: User[];
}

export default function FolderPage() {
  return (
    <div>
      <div>폴더페이지 입니다</div>
    </div>
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
    return {
      props: { userData },
    };
  } catch {
    return {
      props: { userData: [] },
    };
  }
};
