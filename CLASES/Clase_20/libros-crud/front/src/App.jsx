import './App.css'
import {Routes, Route, Outlet, Link} from "react-router-dom"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route index element={<Home/>} /> 
      <Route path="/lista" element={<ListaDeLibros/>} /> 
      <Route path="/contacto" element={<Contacto/>} /> 

      </Route>

    </Routes>

    </>
  )
}

function Layout () {
  return (
    <>
      <h1>Soy header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Bienvenida</Link>
          </li>
          <li>
            <Link to="/lista">Lista de libros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      {/* El Outlet renderiza el Child que provenga del Rote */}
      <Outlet/> 
      <footer>Soy footer</footer>
    </>

  )
}

function Home () {
  return (
    <h1>Nuestra librería</h1>
  )
}

function ListaDeLibros () {
  return (
    <h1>Lista De Libros</h1>
  )
}

function Contacto () {
  return (
    <h1>Contacto</h1>
  )
}

export default App
