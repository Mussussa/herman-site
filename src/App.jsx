import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Hero from './componentes/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Hero/>

    </>
  )
}

export default App
