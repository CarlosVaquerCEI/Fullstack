import { useState } from 'react'
import './App.css'
import { Lugares } from './components/Lugares'
import { Episodios } from './components/Episodios'
import { Personajes } from './components/Personajes'

function App() {

// 1. USO DE HOOKS Y DECLARACION DE VARIABLES

  const [paginaActual, setPaginaActual] = useState("")
  


// 2. CREACION DE FUNCIONES

  const fetchData = async () => {
    
    
    const respuestaEpisodios = await fetch("https://rickandmortyapi.com/api/episode")
    const respuestaLugares = await fetch("https://rickandmortyapi.com/api/location")

    
  }

// 3. RENDERIZADO


  return (
    <>

    <h1>RICK AND MORTY</h1>
    <nav className='navegacion'>
      <ul>
      <button className={paginaActual === "personajes" ? "active" : ""} onClick={() => setPaginaActual("personajes")}>
          Personajes
        </button>
        <button className={`item ${paginaActual === "lugares" ? "active" : ""}`} onClick={() => setPaginaActual("lugares")}> 
          Lugares
        </button>
        <button className={paginaActual === "episodios" ? "active" : ""} onClick={() => setPaginaActual("episodios")}>
          Episodios
        </button>
        
      </ul>
    </nav>

    <div className="pasarPagina">
      <button>Anterior</button>
      <button>Siguiente</button>
    </div>


    {paginaActual === "personajes" && <Personajes />}
    {paginaActual === "lugares" && <Lugares/>}
    {paginaActual === "episodios" && <Episodios/>}
    

    </>
  )
}

export default App
