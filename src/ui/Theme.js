import { createTheme } from "@material-ui/core/styles";
const nclGreen = "#064233";
const nclOrange = "#FFBA60";
const nclGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: `${nclGreen}`,
      orange: `${nclOrange}`,
    },
    primary: {
      main: `${nclGreen}`,
    },
    secondary: {
      main: `${nclOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h2: {
      fontFamily: "Ralewaye",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${nclGreen}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5em",
      color: nclGreen,
    },
    h4: {
      fontFamily: "Ralewaye",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: `${nclGreen}`,
    },
    h6: {
      fontFamily: "Ralewaye",
      fontWeight: 500,
      color: `${nclGreen}`,
      lineHeight: 1,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: `${nclGrey}`,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: "white",
    },
    body2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: `${nclGrey}`,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 30,
      color: nclGrey,
    },
    learnButtom: {
      borderColor: nclGreen,
      borderWidth: 2,
      textTransform: "none",
      color: nclGreen,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "blod",
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
