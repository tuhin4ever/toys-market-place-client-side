import React, { createContext } from 'react';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const user = {
        
        displayName: 'Sakib',
        email: 'tuhin4ever19@gmail.com',
        photoURL: 'https://i.ibb.co/HphgsmS/pexels-kha-ruxury-860538.jpg'

    }
    // const user = false

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;