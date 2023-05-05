import { createContext, useReducer } from 'react';

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
        case "REDMODE":
            return { theme: 'red' };
        case "PURPLEMODE":
            return { theme: 'purple' };
        case "YELLOWMODE":
            return { theme: 'yellow' };
        default:
            return state;
    }
}

function ThemeProvider (props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value = {{state: state, dispatch: dispatch}}>{props.children}</ThemeContext.Provider>
}

export {
    ThemeContext,
    ThemeProvider
}