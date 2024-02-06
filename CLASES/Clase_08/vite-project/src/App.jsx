import { useEffect, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  const usersData = [
    {
      id: 1,
      nombre:"Carlos",
      apellido:"Vaquer",
      isAdmin: true,
      edad: 24
    },
    {
      id: 2,
      nombre:"Marcos",
      apellido:"Gallego",
      deporte: "fútbol",
      isAdmin: false,
      edad: 32
    },
    {
      id: 3,
      nombre:"Raul",
      apellido:"Garcia",
      isAdmin: true,
      edad: 19
    }
  ]

// miVariable es la variable
// setMiVariable es una función que va a actualizar la variable
const [users, setUsers] = useState(usersData) // le envío el valor defecto

  
const Usuario = ({nombre, isAdmin, apellido, edad, deporte="no tiene"}) => {
  return (
    <>
    <li>
      nombre: {nombre} <br />
      apellido: {apellido} <br />
      edad: {edad} <br />
      {isAdmin &&  <> <strong>Soy Admin</strong> <br /> </>} 
      deporte favorito: {deporte} <br /> <br />
    </li>
    </>
  )
  }


  return (
    <>


      <h1>SPREADs</h1>

      

      <button onClick= {() => {

        let random = Math.random()

          // users.push({id:4, nombre:"Dolores", apellido:"García", edad: 45})
          setUsers([...users, {id:random, nombre:"Dolores", apellido:"García", edad: 45}])
        }}>
        AGREGAR USUARIO
      </button>

      <ul>
        {
          users.map((user) => (
            <Usuario key= {user.id} {...user}/>
          ))
        }
      </ul>

    </>
  )
}

export default App
