import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { Box } from "./utils/Box";

import { Hero } from "./components/Hero/Hero";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center">
          <Box width={[1, 1 / 1.1, 1 / 1.5]} backgroundColor={"white"}>
            <Hero></Hero>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
