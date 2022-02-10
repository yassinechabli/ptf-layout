import {createTheme} from "@mui/material/styles/";
import "@fontsource/open-sans";
import "@fontsource/open-sans-condensed/700.css";

import Color from "constants/color";



const BorjTheme = createTheme({
  typography: {
    fontFamily: ["Open Sans"].join(","),
    subtitle1:{
      fontFamily: "Open Sans Condensed"
    },
    h6:{
      fontFamily: "Open Sans Condensed"
    }
  },
  palette: {
    primary: {
      main: Color.BLACK,
      light: Color.WHITE,
    },
    secondary: {
      main: Color.ORANGE,
    },
    dark: {
      main: Color.BLACK,
    },
    error: {
      main: Color.RED,
    },
    success: {
      main: Color.GREEN,
    },

  },
  spacing: (value) => value,
});

export default BorjTheme;
