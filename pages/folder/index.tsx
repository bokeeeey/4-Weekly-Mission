import { ReactNode } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ROUTER } from "@/src/common/constants";
import RootLayout from "../RootLayout";

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

  // try {
  //   const userData = await getUserData(token);
  //   return {
  //     props: { user: userData },
  //   };
  // } catch (error) {
  //   console.error("Folder ServerSide에러", error);
  //   return {
  //     props: { user: null },
  //   };
  // }
};
