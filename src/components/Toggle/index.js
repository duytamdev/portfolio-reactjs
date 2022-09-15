import React from 'react';
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import useTheme from "../../hooks/useTheme";
import './styles.css';
import {TYPE_TOGGLE_THEME} from "../../context/ThemeContext";
const Toggle = () => {
    const {dispatch, darkMode} = useTheme();
    console.log('darkMode', darkMode);
    const handleClick = () => {
        dispatch({ type: TYPE_TOGGLE_THEME });
    };
    return (
        <div className="toggle" onClick={handleClick}>
            <Moon />
            <Sun />
            <div
                className="t-button"
                style={darkMode ? {  transform: "translate(0px,0px)"} : {transform: "translate(18px,0px)"}}
            ></div>
        </div>
    );
};

export default Toggle;
