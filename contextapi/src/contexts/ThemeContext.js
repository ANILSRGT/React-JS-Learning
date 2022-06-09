import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [darkTheme, setDarkTheme] = useState({
        text: '#ffffff',
        background: '#5c5c5c'
    });
    const [lightTheme, setLightTheme] = useState({
        text: '#222222',
        background: '#d8ddf1'
    });

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, darkTheme, lightTheme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider