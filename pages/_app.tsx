import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { User } from "@/src/common/constants/type";

import "@/styles/reset.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (getLayoutProps: {
    page: ReactElement;
    userData?: User[];
  }) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (({ page }) => page);

  const page = (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );

  return getLayout({ page, userData: pageProps.userData });
}
