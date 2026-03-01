// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9A_Hpy5B2Iesz6s2gn957ZS4nnTIgwzQ",
    authDomain: "fir-auth-ffc61.firebaseapp.com",
    projectId: "fir-auth-ffc61",
    storageBucket: "fir-auth-ffc61.firebasestorage.app",
    messagingSenderId: "142196156160",
    appId: "1:142196156160:web:d2fca7681ff43ffb7775e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)