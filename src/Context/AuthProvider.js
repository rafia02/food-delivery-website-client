import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


export const Contex = new createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [itemsManue, setItemsManue ] = useState([])
    const [user, setUser] = useState([])



   const userCreate = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
   }
   const userSingIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
   }
   const userGoogleSingIn = (provider) => {
         return signInWithPopup(auth, provider)
   }
   const userSingOut = () => {
         return signOut(auth)
   }
    
  const unSubcribe= onAuthStateChanged(auth, (carrentUser) => {
       if(carrentUser){
        setUser(carrentUser)
       }

       return () => unSubcribe()
   })









    const authInfo ={itemsManue, setItemsManue, userCreate, userSingIn, userSingOut, userGoogleSingIn,user }
    return (
        <div>
          <Contex.Provider value={authInfo}>
            {children}
          </Contex.Provider>
        </div>
    );
};

export default AuthProvider;