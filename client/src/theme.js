import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#cad2c5",
      main: "#52796f",
      dark: "#2f3e46",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    ColorButton: {
      color: "#2f3e46",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#2f3e46",
        color: "#cad2c5",
      },
    },
  },
});

export default theme;
