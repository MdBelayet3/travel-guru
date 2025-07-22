import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// create context
/* eslint-disable-next-line react-refresh/only-export-components */
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // useState
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // function for create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // function for user login
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function for LogOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // useEffect for user observer by using onAuthStateChange
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the On auth state Change', currentUser)
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginWithEmail,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
