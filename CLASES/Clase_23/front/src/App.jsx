import './App.css'
import {Routes, Route, Outlet, Link} from "react-router-dom"

// Páginas (mis componentes principales)
import { NotFound } from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Navigation from './components/Navigation'
import BookList from './pages/books/BookList'
import BookAdd from './pages/books/BookAdd'
import AuthorList from './pages/author/AuthorList'
import Login from './pages/login/Login'



function App() {


  return (
    <>
    <Routes>

      <Route path="/" element={<Layout/>}>

      <Route index element={<Home/>} /> 
      <Route path="/lista" element={<BookList/>} /> 
      <Route path="/agregar" element={<BookAdd/>} /> 
      <Route path="/autores" element={<AuthorList/>} />
      <Route path='/login' element={<Login/>} />

      <Route path='*' element={<NotFound/>} ></Route>

      </Route>

    </Routes>

    </>
  )
}

// plantilla de toda nuestra app
function Layout () {
  return (
    <>
      
      <Navigation/>
      
      {/* El Outlet renderiza el Child que provenga del Route */}
      <div className="content">
      <Outlet/> 
      </div>
      
      <footer className='footer'>Soy footer</footer>
    </>

  )
}




export default App
