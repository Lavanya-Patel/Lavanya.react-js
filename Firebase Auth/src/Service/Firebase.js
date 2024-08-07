// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0HqYB0RXuZ6Y77_l2ZbFVsJ5ydYv9xDQ",
  authDomain: "fir-auth-89cab.firebaseapp.com",
  projectId: "fir-auth-89cab",
  storageBucket: "fir-auth-89cab.appspot.com",
  messagingSenderId: "501186447266",
  appId: "1:501186447266:web:66f41e2560d15e16ab94fb",
  measurementId: "G-VPQTDF54BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);