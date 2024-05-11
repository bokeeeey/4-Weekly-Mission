import { ReactNode } from "react";
import { Landing, RootLayout } from "@/src/layout";

export default function Home() {
  return <Landing />;
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
