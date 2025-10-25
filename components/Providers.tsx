"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { SessionWatcher } from "@/components/SessionWatcher";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import ReactQueryProvider from "@/components/QueryClientProvider";
import NextTopLoader from "nextjs-toploader";
import theme from "@/lib/theme";
import "react-toastify/dist/ReactToastify.css";

export default function Registry({ children, session }: any) {
  const storeRef: any = useRef(null);
  if (!storeRef.current) storeRef.current = makeStore();

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Provider store={storeRef.current}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer
            position="top-center"
            pauseOnFocusLoss={false}
            hideProgressBar={true}
            autoClose={3000}
            style={{ zIndex: 99999 }}
          />

          <NextTopLoader
            color="#0098DA"
            showSpinner={false}
            height={4}
            zIndex={99999}
          />

          <ReactQueryProvider>
            <SessionProvider
              session={session}
              // refetchInterval={3599}
              // refetchOnWindowFocus={true}
            >
              <SessionWatcher>{children}</SessionWatcher>
            </SessionProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
