import React, { useState } from 'react';
import '../Styles/App.css';

import {getDungeons, authenticate, checkToken} from "../Utils/requests";

function App() {
const [token, setToken] = useState('');

async function fetchDungeons(token){
  checkToken(token);
    if(!token){
      const accessToken = await authenticate();
      console.log(accessToken)
      setToken(accessToken)
    }
  getDungeons('sylvanas', 'svensvensson', token)
}

  return (
    <div className="App">
      <header>
      </header>
      <main>
        {fetchDungeons(token)}
      </main>
    </div>
  );

}




export default App;
