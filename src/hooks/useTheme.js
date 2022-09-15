import {ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";

const useTheme = () => {
    const context = useContext(ThemeContext);
    const darkMode = context.state.darkMode;
    const dispatch = context.dispatch;
    return {darkMode, dispatch};
}
export default useTheme;
