import React from 'react';
import './App.css';
import { useUser } from 'reactfire'
import Auth from './Login/Auth'

function App() {
  const user = useUser();
  return (
    <div className="App">
      {user.data &&<p>Usuario: {user.data.bc.email}</p>}
      <Auth />
    </div>
  );
}

export default App;
