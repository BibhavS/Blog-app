// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA51_oAqj13fsJUnI-S5f2eRqjLKiAiy8k",
  authDomain: "blog-app-3efc4.firebaseapp.com",
  projectId: "blog-app-3efc4",
  storageBucket: "blog-app-3efc4.appspot.com",
  messagingSenderId: "1037322844479",
  appId: "1:1037322844479:web:b74cf2a252942b8a623b8a",
  measurementId: "G-7R5BZPW6L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
