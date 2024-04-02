import './App.css'
import { useState } from 'react'
import Principal from './components/principal/Principal'

function App() {

  const [paginaActual, setPaginaActual] = useState("principal")

  return (
    <>
      <Principal/>
    </>
  )
}

export default App
