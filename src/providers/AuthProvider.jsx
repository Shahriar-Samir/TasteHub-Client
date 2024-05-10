import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (data)=>{
        return updateProfile(auth.currentUser,data)
    }

    const userHandlers = {signIn,signUp,updateUser}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;