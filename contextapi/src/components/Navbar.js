import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
            <h2 style={{ textAlign: 'center' }}>
                Oak Academy
            </h2>
            <p
                style={{ textAlign: 'center' }}
                onClick={changeAuthStatus}
            >
                {
                    isLoggedIn ? 'Logged In' : 'Logged Out'
                }
            </p>
            <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
            </div>
        </nav>
    );
}

export default Navbar;