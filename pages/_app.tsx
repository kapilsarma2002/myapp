import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "reset-css";
import PageLayout from "../components/pageLayout";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {        
        Component.authPage ? (
            <Component {...pageProps} />
          ) : (
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          )
      }
    </ChakraProvider>
  );
};
export default MyApp;
