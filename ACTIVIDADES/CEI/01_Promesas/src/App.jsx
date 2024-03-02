import { useEffect, useState } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    obtenerDatos
  }, [])

  const [data, setData] = useState([])

  const obtenerDatos = async () => {
    const responseProducts = await fetch('https://fakestoreapi.com/products')
    const jsonDataProducts = await responseProducts.json()

    setData(jsonDataProducts)

  }

  console.log(data)

  return (
    <>
      <h2>Peticiones en ReactJS</h2>

      {
        data.map((producto) => {
          <div className="gridProductos">
            <h2>{producto.title}</h2>
          </div>
        })
      }
    </>
  )

}



export default App
