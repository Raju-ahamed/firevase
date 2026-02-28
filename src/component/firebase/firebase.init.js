// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCANolsJ1S23XaKSWAip16mTtVODUxvh00",
    authDomain: "fir-auth-c4114.firebaseapp.com",
    projectId: "fir-auth-c4114",
    storageBucket: "fir-auth-c4114.firebasestorage.app",
    messagingSenderId: "880363819159",
    appId: "1:880363819159:web:aa06594137e52da156d9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);