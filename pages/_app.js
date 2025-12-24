import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { LayoutGroup } from "framer-motion";

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7f7f7',
      100: '#e1e1e1',
      200: '#cfcfcf',
      300: '#b1b1b1',
      400: '#9e9e9e',
      500: '#7e7e7e',
      600: '#626262',
      700: '#515151',
      800: '#3b3b3b',
      900: '#1a1a1a',
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#ffffff',
        color: '#1a1a1a',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <ChakraProvider theme={theme}>
        <LayoutGroup>
          <Component {...pageProps} />
        </LayoutGroup>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

