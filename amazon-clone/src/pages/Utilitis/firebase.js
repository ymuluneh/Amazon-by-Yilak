
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGxfVWJpqIhHF-HciqbVeVZ8XEnohatlg",
  authDomain: "e-clone-24f8e.firebaseapp.com",
  projectId: "e-clone-24f8e",
  storageBucket: "e-clone-24f8e.firebasestorage.app",
  messagingSenderId: "322674352992",
  appId: "1:322674352992:web:49a7a7b4a6106318fff405",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Use compat version to access firestore
import firebase from "firebase/compat/app";
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


