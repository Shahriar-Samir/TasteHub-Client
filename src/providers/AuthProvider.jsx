import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider
    const facebookAuthProvider = new FacebookAuthProvider
    const [loadingSpinner,setLoadingSpinner] = useState(true)
    const [userLoggedIn,setUserLoggedin] = useState(null)

    useEffect(()=>{
            
        onAuthStateChanged(auth,user=>{
                setUserLoggedin(user)
                setLoadingSpinner(false)

    })
    },[])

    const signIn = (email,password)=>{
        setLoadingSpinner(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = ()=>{
        setLoadingSpinner(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    
    const signInWithFacebook = ()=>{
        setLoadingSpinner(true)
        return signInWithPopup(auth,facebookAuthProvider)
    }

    const signUp = (email,password) =>{
        setLoadingSpinner(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (data)=>{
        setLoadingSpinner(true)
        return updateProfile(auth.currentUser,data)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

    const userHandlers = {signIn,signInWithGoogle,signInWithFacebook,signUp,updateUser,userLoggedIn,loadingSpinner,setLoadingSpinner,signOutUser}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;