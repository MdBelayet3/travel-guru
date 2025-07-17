import React, { createContext } from 'react';

    /* eslint-disable-next-line react-refresh/only-export-components */
   export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {name:'shona pakhi'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
