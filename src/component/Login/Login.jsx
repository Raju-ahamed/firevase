import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleOnClick=()=>{
        console.log("clicked");
        signInWithPopup(auth,provider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <p>Please Log in</p>
            <button onClick={handleOnClick}>Sign in with Golgle</button>
        </div>
    );
};

export default Login;