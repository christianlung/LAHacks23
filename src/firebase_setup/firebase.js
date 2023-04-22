// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwB_w1rrEFpktAAEyAkmc-7uNM2mWsBiQ",
  authDomain: "impulsefinder-b9889.firebaseapp.com",
  projectId: "impulsefinder-b9889",
  storageBucket: "impulsefinder-b9889.appspot.com",
  messagingSenderId: "235724087287",
  appId: "1:235724087287:web:7e0c9f13985b99e704d8f2",
  measurementId: "G-BWTFXSVXN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
