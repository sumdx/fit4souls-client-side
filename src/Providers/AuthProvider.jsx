import React, { createContext, useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo ={
        user
    }
    return (
        <AuthContext.Provider authInfo = {authInfo}> {children}</AuthContext.Provider>
    );
};

export default AuthProvider;