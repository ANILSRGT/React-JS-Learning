import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeAuthStatus = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, changeAuthStatus: changeAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;