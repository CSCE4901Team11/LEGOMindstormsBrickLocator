import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Themes = {
    light: {
      background: 'rgba(253, 255, 252, 0.9)',
      textColor: 'rgba(0, 0, 0, 0.8)',
    },
    dark: {
      background: 'rgba(18, 18, 18, 0.9)',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    blue: {
      background: 'rbga(0, 54, 140, 0.9)',
      textColor: 'rgba(255,255,255,1)',
    },
    red: {
      background: 'rgba(161, 7, 2, 0.9)',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    purple: {
      background: 'rgba(91, 5, 138, 0.9)',
      textColor: 'rgba(255, 255, 255, .9)',
    },
    yellow: {
      background: '#rgba(198, 166, 50, 0.9)',
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