import { blue, green, orange, red, blueGrey, grey } from "@mui/material/colors";

const white = "#FFFFFF";
const black = "#000000";

const palette = {
    black,
    white,
    primary: {
        contrastText: white,
        dark: "#0F101A",
        main: "#313552",
        light: "#545B8C",
    },
    secondary: {
        contrastText: white,
        dark: blue[900],
        main: blue["A400"],
        light: blue["A400"],
    },
    success: {
        contrastText: white,
        dark: green[900],
        main: green[600],
        light: green[400],
    },
    info: {
        contrastText: white,
        dark: blue[900],
        main: blue[600],
        light: blue[400],
    },
    warning: {
        contrastText: white,
        dark: orange[900],
        main: orange[600],
        light: orange[400],
    },
    error: {
        contrastText: white,
        dark: red[900],
        main: red[600],
        light: red[400],
    },
    text: {
        secondary: white,
        primary: black,
        link: blue[600],
    },
    background: {
        default: "#F4F6F8",
        paper: white,
    },
    icon: blueGrey[900],
    divider: grey[200],
};

export default palette;
