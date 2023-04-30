import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#f7f5f4",
      appBarLight: "#ffffff",
      appBarDark: "#000000",
    },
    text: {
      primary: "#000000",
    },
    // typography: {
    //   fontFamily: "'Roboto', sans-serif",
    // },
  },
});

export default theme;
