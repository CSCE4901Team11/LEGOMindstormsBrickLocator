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
    /*red: {
      background: '',
      textColor: 'rgba(255,255,255,1)',
    },
    purple: {
      background: '',
      textColor: 'rgba(255,255,255,1)',
    },
    yellow: {
      background: '#C6A632', //198, 166, 50
      textColor: 'rgba(29, 29, 29, 0.8)',
    },*/

}

const useThemeColors = () => {
    //const currentTheme = useContext (ThemeContext); // invalid hook call idkhow to fix that
    //const theme = currentTheme.state.theme;
    //const theme = 'light'
    colors = Themes[theme] // this does work so in theory this is fine
    return colors
}
 
export default useThemeColors;