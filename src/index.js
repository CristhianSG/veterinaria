import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'
import firebaseConfig from './firebase-config';
import { FirebaseAppProvider } from 'reactfire'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="cristhiansg.us.auth0.com" clientId="xdi1C84ShkxkUr7pXJfVINJzwQun0YU5" redirectUri={window.location.origin}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={'Cargando firebase...'}>
          <App />
        </Suspense>
      </FirebaseAppProvider>
    </Auth0Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
