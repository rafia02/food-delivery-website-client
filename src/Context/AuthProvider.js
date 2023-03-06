import React, { useState } from 'react';
import { createContext } from 'react';


export const Contex = new createContext()
const AuthProvider = ({children}) => {
    const [itemsManue, setItemsManue ] = useState([])


    const authInfo ={itemsManue, setItemsManue}
    return (
        <div>
          <Contex.Provider value={authInfo}>
            {children}
          </Contex.Provider>
        </div>
    );
};

export default AuthProvider;