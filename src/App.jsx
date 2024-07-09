import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


      </div>
      <h1>Contador</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          restar
        </button>

      </div>

    </>
  )
}

export default App
