import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#a8da67",
    secondary : "#41d394"
  },
  gradients: {
    main: "linear-gradient(to right,#a8da67 0,#41d394 100%)"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
