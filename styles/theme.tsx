// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "irohakakuC-Bold",
    body: "'YuGothic','Yu Gothic Medium', 'Yu Gothic','游ゴシック体', '游ゴシック Medium', '游ゴシック','Helvetica Neue','Helvetica', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
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
