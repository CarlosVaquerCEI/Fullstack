import Header from '../components/header/Header'
import './App.css'

function App() {

  const { VITE_USERS } = import.meta.env


  return (
    <>
      <Header/>
    </>
  )
}

export default App
