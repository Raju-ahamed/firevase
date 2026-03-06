import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const handleOnClick = () => {
        console.log("clicked");
        signInWithPopup(auth, provider).then(resut => {
            console.log(resut.user);
            setUser(resut.user)
        }).catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <p>Please Log in with gmail</p>
            <button onClick={handleOnClick}>plz Sign in with Golgle</button>
            <div>
                <h3>{user?.displayName}</h3>
                <p>Email:{user?.email}</p>
                <img src={user.photoURL} alt="image" />
            </div>
        </div>
    );
};

export default Login;