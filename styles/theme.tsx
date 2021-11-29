// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "irohakakuC-Bold",
    body: "'YuGothic', 'Yu Gothic Medium', 'Yu Gothic' '游ゴシック体', '游ゴシック Medium', '游ゴシック'",
  },
  colors: {
    base: "#fff",
    main: "#250B0D",
    accent: "#F6D967",
  },
  breakpoints: {
    sm: "30em",
    xl: "80em",
  },
});

export default theme;
