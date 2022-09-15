import React, {createContext, useReducer} from 'react';

export const ThemeContext = createContext();
export const TYPE_TOGGLE_THEME = 'TOGGLE_THEME';
const initialState = {darkMode: false};
const init = () => {
    return {darkMode: false};
}
const themeReducer = (state, action) => {
    switch (action.type) {
        case TYPE_TOGGLE_THEME:
            return {darkMode: !state.darkMode};
        default:
            return state;
    }
}
const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initialState, init);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
