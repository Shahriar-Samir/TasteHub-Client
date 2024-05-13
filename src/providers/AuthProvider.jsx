import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';
import axios from 'axios'


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const user = auth.currentUser
    const googleAuthProvider = new GoogleAuthProvider
    const facebookAuthProvider = new FacebookAuthProvider
    const [loadingSpinner,setLoadingSpinner] = useState(true)
    const [userLoggedIn,setUserLoggedin] = useState(null)

    useEffect(()=>{
            
        onAuthStateChanged(auth,user=>{
                const userData = {email: user?.email || userLoggedIn?.email}
                setUserLoggedin(user)
                setLoadingSpinner(false)
                if(user){
                    axios.post('http://localhost:5000/jwt',userData, {withCredentials:true})
                }
                else{
                    axios.post('http://localhost:5000/logout',userData, {withCredentials:true})
                }
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

    const userHandlers = {signIn,signInWithGoogle,signInWithFacebook,signUp,updateUser,userLoggedIn,loadingSpinner,setLoadingSpinner,signOutUser,user}
    return (
        <AuthContext.Provider value={userHandlers}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;