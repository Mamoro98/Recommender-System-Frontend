"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e235f",
      light: "#9e7cff",
    },
    secondary: {
      main: "#f926ae",
    },
    info: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "unset",
  },
});

export default theme;
