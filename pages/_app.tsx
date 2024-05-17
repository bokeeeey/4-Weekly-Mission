import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import {
  QueryClient,
  QueryClientProvider,
  DehydratedState,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { AppProps } from "next/app";
import type { User } from "@/src/types/type";

import "@/styles/reset.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (getLayoutProps: {
    page: ReactElement;
    userData?: User[];
  }) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  dehydratedState: DehydratedState;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (({ page }) => page);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  const page = (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydrateState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </HydrationBoundary>
    </QueryClientProvider>
  );

  return getLayout({ page, userData: pageProps.userData });
}
