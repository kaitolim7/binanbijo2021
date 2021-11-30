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
  const title: string = "美男美女SNAP2021";
  const description: string = "美しいは面白いだ__。";
  const url: string = "/binanbijosnap.com";
  const image: string = "/images/og_image.jpg";
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
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>{" "}
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
