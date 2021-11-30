import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Head from "next/head";
import GoogleTagManager, {
  googleTagManagerId,
  GoogleTagManagerId,
} from "../components/GoogleTagManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/images/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/images/icon-192x192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
