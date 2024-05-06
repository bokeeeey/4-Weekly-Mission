import { Landing, RootLayout } from "@/src/layout";
import { ReactNode } from "react";

export default function Home() {
  return <Landing />;
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
