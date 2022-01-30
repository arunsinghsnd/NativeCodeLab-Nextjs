import { createTheme } from "@material-ui/core/styles";
const nclGreen = "#064233";
const nclOrange = "#FFBA60";
const nclGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: nclGreen,
      orange: nclOrange,
    },
    primary: {
      main: nclGreen,
    },
    secondary: {
      main: nclOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: nclGreen,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: nclGreen,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: nclGreen,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: nclGreen,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: nclGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1.25rem",
      color: nclGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: nclGrey,
    },
    learnButton: {
      borderColor: nclGreen,
      borderWidth: 2,
      textTransform: "none",
      color: nclGreen,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: nclGreen,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: nclGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${nclGreen}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${nclGreen}`,
        },
      },
    },
  },
});
