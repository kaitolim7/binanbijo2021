import { Box, Center, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import KadaiInfoLogo from "../../public/images/kadaiinfo_logo.png";
import Banner from "../../public/images/banner.jpg";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Head from "next/head";

type Props = {
  title: string;
  disable: boolean;
};

export default function Header(props: Props) {
  const isXl = useBreakpointValue({ sm: false, md: false, lg: true, xl: true });
  const title: string = props.title;
  const description: string = "美しいは面白いだ__。";
  const url: string = "/binanbijosnap.com";
  const image: string = "/images/og_image.jpg";

  return (
    <>
      <Head>
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
        <meta
          name="twitter:image"
          content={"../../public/images/og_image.jpg"}
        />
      </Head>
      {!props.disable && (
        <Box>
          {isXl ? (
            <>
              <Center shadow="md">
                <Image src={KadaiInfoLogo} width={235} height={50} />
              </Center>
              <Flex justify="center" alignItems="center">
                <Image src={Banner} width={1010} height={260} />
              </Flex>
            </>
          ) : (
            <>
              <Center shadow="md">
                <Image src={KadaiInfoLogo} width={141} height={30} />
              </Center>
              <Image src={Banner} />
            </>
          )}
        </Box>
      )}
    </>
  );
}
