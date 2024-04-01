import "@/src/styles/global.scss";
import { ReactNode } from "react";

export const metadata = {
  title: "Linkbrary",
  description: "bokeeey weeklyMission",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
