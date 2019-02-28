import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import UI from './modules';
import indigo from '@material-ui/core/colors/deepOrange';
import pink from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <UI/>
        </MuiThemeProvider>
    );
  }
}

export default App;
