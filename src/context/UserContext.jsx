import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
   
    const [user1, setUser] = useState("");
    const [email, setEmail] = useState("");


    return ( 
    <UserContext.Provider value={{ user1, setEmail, email, setUser}}>
        {children}
    </UserContext.Provider> 
    )
}

