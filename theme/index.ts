import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "initial",
    body: "initial",
  },
  styles: {
    global: {
      html: {
        fontSize: "14px",
      },
      "html, body": {
        color: "gray.700",
      },
    },
  },
});

export default theme;
