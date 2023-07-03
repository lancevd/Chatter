// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB97-W6KI2F5aaUSwdeuAZapf5yKTFxtlY",
  authDomain: "chatter-153c9.firebaseapp.com",
  projectId: "chatter-153c9",
  storageBucket: "chatter-153c9.appspot.com",
  messagingSenderId: "45961293465",
  appId: "1:45961293465:web:9ed39d70be000444b29208",
  measurementId: "G-DTD0Y57SMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// const createWithMail = new createUserWithEmailAndPassword()
// const signInWithMail = new signInWithEmailAndPassword()
const db = getFirestore(app)

export {analytics, auth, googleProvider, db}