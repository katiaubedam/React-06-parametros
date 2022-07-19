import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';

import Resultados from './components/Resultados';
import './App.css';

function App() {

  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)

  function reset() {
    setNum1(0)
    setNum2(0)
  }

  return (
    <BrowserRouter>
      <div>
        <h2>{num1}</h2>
        <button onClick={() => setNum1(num1 + 1)}>+</button>
        <button onClick={() => setNum1(num1 - 1)}>-</button>
      </div>

      <div>
        <h2>{num2}</h2>
        <button onClick={() => setNum2(num2 + 1)}>+</button>
        <button onClick={() => setNum2(num2 - 1)}>-</button>
      </div>

      <Link to={`/resultados/${num1}/${num2}`}><p>Mostrar resultados</p></Link>

      <div><button onClick={reset}>Reiniciar</button></div>

      <Routes>
        <Route path="/resultados/:num1/:num2" element={<Resultados />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
