import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider
    const facebookAuthProvider = new FacebookAuthProvider

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleAuthProvider)
    }
    
    const signInWithFacebook = ()=>{
        return signInWithPopup(auth,facebookAuthProvider)
    }

    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (data)=>{
        return updateProfile(auth.currentUser,data)
    }

    const userHandlers = {signIn,signInWithGoogle,signInWithFacebook,signUp,updateUser}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;