
import './App.css'
import Header from './components/header/Header'

function App() {

  const { VITE_USERS } = import.meta.env


  return (
    <>
    <Header />
    </>
  )
}

export default App
