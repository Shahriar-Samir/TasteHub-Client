import React, { createContext } from 'react';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const userHandlers = {signIn}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;