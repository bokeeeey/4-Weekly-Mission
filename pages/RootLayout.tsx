import { Metadata } from "next";
import { ReactNode } from "react";
import { Footer, GNB } from "../src/components/common";
import type { User } from "@/src/types/type";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
  // metadataBase: new URL("")
};

interface RootLayoutProps {
  children: ReactNode;
  userData?: User[];
}

export default function RootLayout({ children, userData }: RootLayoutProps) {
  return (
    <div>
      <GNB userData={userData} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
