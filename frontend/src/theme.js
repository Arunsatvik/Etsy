import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#558ac2",
      main: "#558ac2",
      dark: "#558ac2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#558ac2",
      main: "#558ac2",
      dark: "#558ac2",
      contrastText: "#000",
    },
    openTitle: "#558ac2",
    protectedTitle: "#558ac2",
    type: "light",
  },
});

export default theme;
