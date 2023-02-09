// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVIjQnSHgejNI31_7KNUQblTF7_Uug1Mk",
  authDomain: "jazamiti.firebaseapp.com",
  projectId: "jazamiti",
  storageBucket: "jazamiti.appspot.com",
  messagingSenderId: "68497623041",
  appId: "1:68497623041:web:e76f079af740123fef1800"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore ();