// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSebmcRjbhInj2San4P-lkPEArwiMOPSw",
  authDomain: "blog-59316.firebaseapp.com",
  projectId: "blog-59316",
  storageBucket: "blog-59316.appspot.com",
  messagingSenderId: "287409295969",
  appId: "1:287409295969:web:6ecd0f49ba863c3551d020",
  measurementId: "G-Y63GQ07R33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}