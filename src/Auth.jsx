import React, { useState } from 'react'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'
import Veterinaria from './Veterinaria'

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () => {
        await firebase.auth().signOut();
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return (
        <div>

            {
                !user.data &&
                <div>
                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
                    </div>
                    <div className="botones">
                        <button onClick={login}>Iniciar Sesion</button>
                        <button onClick={submit}>Crear Cuenta</button>
                    </div>
                </div>}
            {
                user.data &&
                <div>
                    <Veterinaria/>
                    <button onClick={logout}>Cerrar Sesión</button>
                </div >
            }
        </div>
    )
}