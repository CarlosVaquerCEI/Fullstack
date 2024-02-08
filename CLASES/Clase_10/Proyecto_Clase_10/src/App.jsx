import { TodoList } from './components/Todolist'
import { useEffect, useState } from 'react'




// Esta info es de la base de datos
// const misTareas =[{
//   id: 1, tarea:"Programar", isCompletada: false
// }, {
//   id: 2, tarea:"Estudiar", isCompletada: true
// }]


function App() {

/*-----------------------------------------------------------
1. USO DE HOOKS Y DECLARACION DE VARIABLES
------------------------------------------------------------*/

//estamos trayendo informacion de la base de datos
const [isLoading, setIsLoading] = useState(true)

// en setData voy a guardar mi lista de tareas
const [data, setData] = useState([])

// Hook useEffect, trabaja los estados de mi APP
// 1. Cuando se crea el componente
// 2. Cuando se re-renderiza el componente
// 3. Cuando se elimina el componente

// ComponentDidMount()
useEffect(() => {
  console.log("Inicié mi componente App.jsx");


// función para que se muestren los datos con retraso, en este caso 2segundos de retraso (setTimeout(función, tiempo))
  setTimeout(() => {
    fetchData();
    setIsLoading(false)
  }, 2000)

}, []) // se ejecuta cuando carga el componente por primera vez

// ComponentDidUpdate()
useEffect(() => {
  console.log("Cargué mi componente App.jsx")
}, [isLoading]) // se ejecuta cuando carga el componente por primera vez






/*-----------------------------------------------------------
2. CREACION DE FUNCIONES
------------------------------------------------------------*/

const fetchData = async () => {

  // await es para no esperar a la promesa
  const response = await fetch("./api/datos.json")
  const jsonData = await response.json()
console.log("data es :", jsonData);
  setData(jsonData)
  setIsLoading(false)
}


/*-----------------------------------------------------------
3. CREACION DE VISTAS / INTERFAZ GRAFICA
------------------------------------------------------------*/

  return (
    <>

    <h1>Lista de Tareas</h1>

    {
      isLoading
      ? <p>Cargando datos...</p>
      : (<TodoList listaTareas={data}/>)
    }
 
    </>
  )
}

export default App
