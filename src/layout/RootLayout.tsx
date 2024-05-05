import { Metadata } from "next";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
  // metadataBase: new URL("")
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <div>헤더입니다</div>
      <div>{children}</div>
      <div>푸터입니다</div>
    </div>
  );
}
