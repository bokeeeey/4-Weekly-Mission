import "@/src/styles/global.scss";

export const metadata = {
  title: "Linkbrary",
  description: "bokeeey weeklyMission",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
