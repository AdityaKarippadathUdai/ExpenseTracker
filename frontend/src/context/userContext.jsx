import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const UserProvider=({children})=>{
    const [user,setUser]=useState(null);
    // Update User data
    const updateUser=(userData)=>{
        setUser(userData);
    }

    // Clear User data on logout
    const clearUser=()=>{
        setUser(null);
    }
    
    return (
        <UserContext.Provider value={{user,updateUser,clearUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;