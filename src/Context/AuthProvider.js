import React, { useEffect, useReducer, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';
import toast from 'react-hot-toast';


export const Contex = new createContext()
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
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





  const handleWishLists = (catagoris, picture, title, descreption, price, _id) =>{


    const wishListsProduct ={
        email: user.email,
        catagoris,
        picture,
        title,
        productId: _id,
        descreption,
        price,
        fevourite: false,
        quantity: 1 

    }
   fetch('http://localhost:5000/wishlistsProducts', {
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body: JSON.stringify(wishListsProduct)
   })
   .then((res)=> res.json())
   .then((data) => {
    console.log(data)
    toast.success("Success your wishlists products ")
   })
   .catch((err)=> {
    console.log(err)
    toast.error("Sorry, Filed Requst Wishlists...!")
   })

    
}







const handleAddToCart = (catagoris, picture, title, descreption, price, _id, id) => {


  const cartProduct = {
      email: user.email,
      catagoris,
      picture,
      title,
      total: price,
      productId: id,
      descreption,
      price,
      fevourite: false,
      quantity: 1,
  }


  fetch(`http://localhost:5000/allcart`, {
      method: 'POST',
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(cartProduct)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          forceUpdate();
      })

}








  const authInfo = { itemsManue,loading, handleAddToCart, handleWishLists, setNotifiaction, notifiaction, setLoading, setItemsManue, userCreate, userSingIn, userSingOut, userGoogleSingIn, user }
  return (
    <div>
      <Contex.Provider value={authInfo}>
        {children}
      </Contex.Provider>
    </div>
  );
};

export default AuthProvider;