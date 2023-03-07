// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD99mXnYIbBecD4xZqrgYfe_ixcCm0e-SI",
  authDomain: "food-delivery-website-projects.firebaseapp.com",
  projectId: "food-delivery-website-projects",
  storageBucket: "food-delivery-website-projects.appspot.com",
  messagingSenderId: "758922519458",
  appId: "1:758922519458:web:ccb9cc38fedcdbb5e548fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;