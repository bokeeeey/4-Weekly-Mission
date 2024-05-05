import { RootLayout } from "@/src/layout";
import "@/styles/reset.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />;
    </RootLayout>
  );
}
