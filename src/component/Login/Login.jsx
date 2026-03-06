import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
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
    const githubProvider = new GithubAuthProvider();
    const handleOnGithub =()=>{
        signInWithPopup(auth,githubProvider).then(resut=>{
            setUser(resut.user)
            console.log(resut.user)
        }).catch(error=>{
            console.log(error)
        })
    }
    const handleSignOut =()=>{
        signOut(auth).then(()=>{
            setUser(null);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <p>Please Log in with gmail</p>
            {
                user ? <button onClick={handleSignOut}>sgin out</button> : <>
                    <button onClick={handleOnClick}>plz Sign in with Golgle</button>
                    <button onClick={handleOnGithub}>plz Sign in with Github</button>
                </>
            }
            
            
            <div>
                <h3>{user?.displayName}</h3>
                <p>Email:{user?.email}</p>
                <img src={user?.photoURL} alt="image" /><br />
               
            </div>
        </div>
    );
};

export default Login;