import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';


export const Contex = new createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [itemsManue, setItemsManue ] = useState([])




   const userCreate = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
   }


    




    const authInfo ={itemsManue, setItemsManue, userCreate }
    return (
        <div>
          <Contex.Provider value={authInfo}>
            {children}
          </Contex.Provider>
        </div>
    );
};

export default AuthProvider;