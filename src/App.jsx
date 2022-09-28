import { GlobalStyle } from "./utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.jsx";
import { Box } from "./utils/Box";
import { Provider } from "react-redux";
import { Hero } from "./components/Hero/Hero";
import { ProgresBar } from "./components/ProgressBar/ProgresBar";
import { store } from "./redux/store";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Box display="flex" justifyContent="center">
            <Box width={[1, 1 / 1.1, 1 / 1.5]} backgroundColor={"white"}>
              <Hero></Hero>
              <ProgresBar></ProgresBar>
            </Box>
          </Box>
        </Provider>
      </ThemeProvider>
    </>
  );
};
