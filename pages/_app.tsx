import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Poppins } from "next/font/google";
import theme from "../theme";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Concierge - Administration</title>
        <meta name="description" content="The Administration Platform for A Hotel Reservation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <div className={poppins.className}>{getLayout(<Component {...pageProps} />)}</div>
      </ChakraProvider>
    </>
  );
}
