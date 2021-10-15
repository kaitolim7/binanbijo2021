// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "irohakakuC-Bold",
    body: "'YuGothic', 'Yu Gothic Medium', 'Yu Gothic'",
  },
  components: {
    Divider: {
      baseStyle: {
        colorScheme: "red", // Normally, it is "semibold"
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },
});
export default theme;
