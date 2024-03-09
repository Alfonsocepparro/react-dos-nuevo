import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJ77s1Y7zDH-EPQGjYHCb2iFwO_oqBfK4",
    authDomain: "autosdelujo-f0274.firebaseapp.com",
    projectId: "autosdelujo-f0274",
    storageBucket: "autosdelujo-f0274.appspot.com",
    messagingSenderId: "512865846196",
    appId: "1:512865846196:web:972a455e8a2206340768e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
