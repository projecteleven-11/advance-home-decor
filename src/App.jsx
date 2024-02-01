import { useState } from 'react'
import reactLogo from './assets/react.svg'
import adhLogo from '../public/logo.png';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a 
        // href="https://react.dev" 
        // target="_blank"
        >
          <img src={adhLogo} className="adh logo" alt="React logo" />
        </a>
      </div>
      <h1>Advance Home Decor</h1>
      <h3>Website is under construction! 🚧 <br />
      till then you can connect with us on:</h3>
      <p>🏠 17, Kailash Vihar, City Center Gwalior</p>
      <p>📲 07247745007</p>
      <h2>Branch Offices</h2>
      <p>🏠 B2-1106, DB Pride, Talawali Chanda Near Dewas Naka, Indore (Madhya Pradesh)</p>
      <p>🏠 A-427, 4th Floor, Vashisht Complex M.G. Road, Sikanderpur, Gurugram - 122002 (Harayana)</p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
        {/* <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p> */}
    </>
  )
}

export default App
