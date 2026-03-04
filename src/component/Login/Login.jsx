import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';
const Login = () => {
const provider = new GoogleAuthProvider();

    const handleOnClick=()=>{
        console.log("clicked");
        signInWithPopup(auth,provider).then(resut=>{
            console.log(resut)
        }).catch(error=>{
            console.log(error)
        })
       
    }
    return (
        <div>
            <p>Please Log in with gmail</p>
            <button onClick={handleOnClick}>plz Sign in with Golgle</button>
            <button>facebook sgin in</button>
        </div>
    );
};

export default Login;