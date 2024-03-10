// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJ77s1Y7zDH-EPQGjYHCb2iFwO_oqBfK4",
    authDomain: "autosdelujo-f0274.firebaseapp.com",
    projectId: "autosdelujo-f0274",
    storageBucket: "autosdelujo-f0274.appspot.com",
    messagingSenderId: "512865846196",
    appId: "1:512865846196:web:06d6f64444f4b7700768e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
