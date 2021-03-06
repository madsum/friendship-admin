import { blueGrey, orange, red } from 'material-ui/colors';

export default {
  // App spacing config. Sets the size of various components.
  spacing: {
    unit: 8,
  },

  tablerow: {
    banned: {
      backgroundColor: red
    }
  },

  // App color palette
  palette: {
    primary: blueGrey,
    secondary: orange,
    error: red,
    type: 'light',
  },

  paper: {
    textAlign: 'center',
    display: 'inline-block',
  },

  root: {
    flexGrow: 1,
  },
};
