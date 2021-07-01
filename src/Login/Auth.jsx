import React, { Component, useState } from 'react'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'
import Veterinaria from './../Veterinaria/Veterinaria'
import firebase from 'firebase/app'



export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();

    const loginWithGoogle = async () => {
        var provider = firebase.auth.GoogleAuthProvider;

        firebase.auth().signInWithRedirect(provider);
        firebase.auth()
            .getRedirectResult()
            .then((result) => {
                if (result.credential) {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // ...
                }
                // The signed-in user info.
                var user = result.user;
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        })
    }

    const logout = async () => {
        await firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
    }

    const login = async () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }

    return (
        <div>
            {
                user.data &&
                <div>
                    
                    <button onClick={logout}>Cerrar Sesión</button>
                    <Veterinaria />
                </div >
            }
            {
                !user.data &&
                <div>
                    <div>
                        <label htmlFor="email">Correo: </label>
                        <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
                    </div>
                    <div className="botones">
                        <div>
                            <button onClick={login}>Iniciar Sesion</button>
                            <button onClick={submit}>Crear Cuenta</button>
                        </div>
                        <div>
                            <button onClick={loginWithGoogle}>Inicia sesión con Google</button>
                        </div>
                    </div>
                </div>}

        </div>
    )
}