import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Saludar from './components/Saludar';

import './App.css';

function App() {

  let [username, setUsername] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <div>
            <input type="text" placeholder="Introduce el username" onChange={(event) => setUsername(event.target.value)} value={username} />
            <Link to={`/saludar/${username}`}><button>Entrar</button></Link>
          </div>
        } />
        <Route path="/saludar/:username" element={<Saludar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
