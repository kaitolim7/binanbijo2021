import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <meta name="description" content="binanbijo2021" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/images/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/images/icon-192x192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
