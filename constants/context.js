import { createContext, useReducer, useContext } from 'react';

const ThemeContext = createContext();
const initialState = { theme: 'light' };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHTMODE":
            return { theme: 'light' };
        case "DARKMODE":
            return { theme: 'dark' };
        case "BLUEMODE":
            return { theme: 'blue' };
        default:
            return state;
    }
}

function ThemeProvider (props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value = {{state: state, dispatch: dispatch}}>{props.children}</ThemeContext.Provider>
}

// function useThemeColors () {
//     const currentTheme = useContext (ThemeContext);
//     const theme = currentTheme.state.theme;
//     return {
//         colors: Colors[theme]
//     }
// }

export {
    ThemeContext,
    ThemeProvider
    // useThemeColors
}