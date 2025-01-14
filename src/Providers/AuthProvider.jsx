import React, { createContext, useContext, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle =()=>{
        return signInWithPopup(auth, googleAuthProvider);
    }
    
    const signOutUser = () => {
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        signUpUser,
        signInUser,
        signInUserWithGoogle,
        signOutUser,
    }
    
    return (
        <AuthContext.Provider value = {authInfo}> {children}</AuthContext.Provider>
    );
};

export default AuthProvider;