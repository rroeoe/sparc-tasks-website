import { createTheme } from "@mui/material/styles";
import { deDE } from '@mui/material/locale';

export const font = "'Inter', sans-serif;";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9b9b9b",
      contrastText: "white"
    },
    secondary: {
      main: "#454655",
    },
    third: {
      main: "#016699",
      contrastText: "white"
    },
        background: {
      default: "#F7F7FB",
    }
  },
  typography: {
    fontFamily: font,
    h4: {
      fontWeight: 600,
      fontSize: 20
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 13,
    }
  },
}, deDE
);

export const tableTheme = createTheme({
  palette: {
        background: {
      default: "#FFFFFF",
    }, 
    secondary: {
      main: "#dc0418",
    },
  },
  typography: {
  },
}, deDE
);
