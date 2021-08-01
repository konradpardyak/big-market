import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#a8da67",
    secondary : "#41d394",
    main : "#1d1e20",
    dark : "#242828",
    light : "#f3f3f3"
  },
  gradients: {
    main: "linear-gradient(to right,#a8da67 0,#41d394 100%)"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
