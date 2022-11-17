import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Themes = {
    light: {
      background: 'rgba(253, 255, 252, .9)',
      textColor: 'rgba(0, 0, 0, 0.8)',
      sideMenuBackground: 'rgba(255, 255, 255, 0.9)',
    },

    dark: {
      background: 'rgba(18, 18, 18, .9)',
      textColor: 'rgba(255, 255, 255, .9)',
      sideMenuBackground: 'rgba(18, 18, 18, 0.9)',
    },

    blue: {
      background: 'rgba(0, 54, 140, .9)',
      textColor: 'rgba(255,255,255,1)',
      sideMenuBackground: 'rgba(137, 207, 240, 0.9)',
    },

    red: {
      background: 'rgba(161, 7, 2, .9)',
      textColor: 'rgba(255, 255, 255, .9)',
      sideMenuBackground: 'rgba(200, 45, 56, 0.9)',
    },

    purple: {
      background: 'rgba(91, 5, 138, .9)',
      textColor: 'rgba(255, 255, 255, .9)',
      sideMenuBackground: 'rgba(130, 7, 197, 0.9)',
    },

    yellow: {
      background: 'rgba(198, 166, 50, .9)',
      textColor: 'rgba(29, 29, 29, .8)',
      sideMenuBackground: 'rgba(222, 189, 69, 0.9)',
    },
}

export default Themes;