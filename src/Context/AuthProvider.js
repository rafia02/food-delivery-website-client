import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


export const Contex = new createContext()
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [notifiaction, setNotifiaction] = useState("0")

  useEffect((id = "Seafood") => {
    fetch(`http://localhost:5000/itemsProducts/${id}`)
      .then(res => res.json())
      .then(data => setItemsManue(data))

  }, [])

  const [itemsManue, setItemsManue] = useState([])
  const [user, setUser] = useState([])



  const userCreate = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userSingIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userGoogleSingIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const userSingOut = () => {
    return signOut(auth)
  }

  const unSubcribe = onAuthStateChanged(auth, (carrentUser) => {
    if (carrentUser) {
      setUser(carrentUser)
      setLoading(false)
    }

    return () => unSubcribe()
  })









  const authInfo = { itemsManue,loading, setNotifiaction, notifiaction, setLoading, setItemsManue, userCreate, userSingIn, userSingOut, userGoogleSingIn, user }
  return (
    <div>
      <Contex.Provider value={authInfo}>
        {children}
      </Contex.Provider>
    </div>
  );
};

export default AuthProvider;