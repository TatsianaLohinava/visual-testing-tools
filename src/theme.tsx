import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h6: {
      fontSize: 21,
    },
  },
});

export default theme;
