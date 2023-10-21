import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar";
import imagePath from "./assets/react.svg";
import TestetComponent from './components/TestetComponent.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx';

function App() {
  const [count, setCount] = useState(0)
  let items = ["Home","Product", "Service"];
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    

      <div>
      <NavBar 
      brandName="My Brand" 
      imageSrcPath={imagePath} 
      navItems={items}/>
    </div>

    <TestetComponent />
    <Header />

    <Footer />

    </>
  )
}

export default App
