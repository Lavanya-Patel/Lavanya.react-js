// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ZwcSOaYwikwIRoGW7s3ZhcFtpu0oCe8",
  authDomain: "fir-c2ef1.firebaseapp.com",
  projectId: "fir-c2ef1",
  storageBucket: "fir-c2ef1.appspot.com",
  messagingSenderId: "354065132327",
  appId: "1:354065132327:web:147d655c386568b9515702",
  measurementId: "G-5FWR6XSJXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);