import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Acerca } from './components/Acerca'
import { Contacto } from './components/Contacto'

function App() {

  const [paginaActual, setPaginaActual] = useState("contacto")

  return (
    <>
    <nav>
      <ul>
        <button className={`item ${paginaActual === "home" ? "active" : ""}`} onClick={() => setPaginaActual("home")}> 
          Home
        </button>
        <button className={paginaActual === "acerca" ? "active" : ""} onClick={() => setPaginaActual("acerca")}>
          Acerca
        </button>
        <button className={paginaActual === "contacto" ? "active" : ""} onClick={() => setPaginaActual("contacto")}>
          Contacto
        </button>
      </ul>
    </nav>


    {paginaActual === "home" && <Home/>}
    {paginaActual === "contacto" && <Contacto/>}
    {paginaActual === "acerca" && <Acerca />}

    </>
  )
}

export default App
