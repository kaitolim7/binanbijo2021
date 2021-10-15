import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: "irohakakuC";
        src: url("../public/fonts/irohakakuC-Bold.ttf");
        font-style: normal;
        font-display: swap;
      }
     
      `}
  />
);
export default Fonts;
