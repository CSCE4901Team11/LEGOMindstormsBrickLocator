import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Themes = {
    light: {
      background: "#FDFFFC",
      textColor: 'rgba(0, 0, 0, 0.8)',
    },
    dark: {
      background: '#121212',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    blue: {
      background: '#00368c',
      textColor: 'rgba(255,255,255,1)',
    },
    red: {
      background: 'rbga(161, 7, 2, 1)',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    purple: {
      background: 'rbga(91, 5, 138, 1)',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    yellow: {
      background: 'rbga(198, 166, 50, 1)',
      textColor: 'rgba(29, 29, 29, 0.8)',
    },
}

// const UseThemeColors = () => {
//     const currentTheme = useContext (ThemeContext); // invalid hook call idkhow to fix that
//     const theme = currentTheme.state.theme;
//     //const theme = 'light'
//     colors = Themes[theme] // this does work so in theory this is fine
//     return colors
// }
 
export default Themes;