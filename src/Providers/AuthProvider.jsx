import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookingData, setBookingData] = useState({});
    const axiosPublic = useAxiosPublic();

    const signUpUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithGoogle =()=>{
        setLoading(true);
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
        bookingData, 
        setBookingData
    }
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            // JWT
            if(currentUser){
                const userInfo ={email : currentUser.email};
                axiosPublic.post('jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })

        return()=>{
            unSubscribe();
        } 

    },[axiosPublic])

    return (
        <AuthContext.Provider value = {authInfo}> {children}</AuthContext.Provider>
    );
};

export default AuthProvider;