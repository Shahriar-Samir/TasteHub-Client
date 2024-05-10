import React, { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const userHandlers = {}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;