import { blue, green } from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary:{
      main: blue[500]
    },
    secondary: {
      main: green[500]
    },   
    background: {
      default: '#fff'
    },
  }
});

export default theme;
