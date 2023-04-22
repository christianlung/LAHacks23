// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWDeMoB0-HKIpmYCq93rzLOi6v2lEri70",
  authDomain: "tourapp-d0df0.firebaseapp.com",
  projectId: "tourapp-d0df0",
  storageBucket: "tourapp-d0df0.appspot.com",
  messagingSenderId: "649297216492",
  appId: "1:649297216492:web:3968fd4bc2dbc7594476c9",
  measurementId: "G-V00JPQKBGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);