// import { useEffect, useState } from 'react'


function App() {
  // const [count, setCount] = useState(0)

  // useEffect( () => {

  //   console.clear()

  //   // USO DE SPREAD (...) sirve para añadir, duplicar o eliminar elementos

  //   // SPREAD PARA OBJETOS
  //   const user = {
  //     nombre: "Laura",
  //     edad: 25,
  //     domicilio: {
  //       ciudad: Valencia,
  //       cp: 14026
  //     }
  //   }

  //   // Versión simple de hacer una copia multinivel, PEEERO,
  //   // no funciona si mi objeto tiene funciones, undefined, NaN
  //   const userCopy2 = JSON.parse(JSON.stringify(user))

  //   // Me crea una shallow copy de mi objeto User
  //   const userCopy = {...user}
  //   userCopy.edad = 33
  //   userCopy.domicilio.ciudad = "Madrid"

  //   // console.log("user es: ", user)
  //   // console.log("user es: ", userCopy)






  //   // SPREAD PARA ARRAYS

  //   const semana = ["lunes", "Martes", "Miercoles"]

  //   // nomenclatura de manipulación de arrays en React
  //   const semanaCopy = [...semana, "Jueves", "Viernes"]

  //   // semanaCopy.push("Jueves")

  //   // console.log("semana es: ", semana)
  //   // console.log("semana es: ", semanaCopy)




  //   // SPREAD PARA FUNCIONES

  //   function mostrarVerduras (verdura1, verdura2) {
  //     // console.log(verdura1, verdura2)
  //   }

  //   mostrarVerduras("Lechuga", "Zanahoria")

  //   function mostrarVerdurasSpread (...datos) {
  //     // console.log(datos)
  //   }

  //   mostrarVerdurasSpread("Lechuga", "Zanahoria", "Tomate", "Pepino")
  // })





  // const Componente = ({prop1,prop2,prop3}) => {
  //   return (
  //     <>
  //     <h1>Soy un componente</h1>

  //     <ul>
  //       <li>{prop1}</li>
  //       <li>{prop2}</li>
  //       <li>{prop3}</li>
  //     </ul>

  //     </>

  //   )
  // }


// Mis Datos 
  const users = [
    {
      nombre:"Carlos",
      apellido:"Vaquer",
      edad: 24
    },
    {
      nombre:"Marcos",
      apellido:"Gallego",
      edad: 32
    },
    {
      nombre:"Raul",
      apellido:"Garcia",
      edad: 19
    }
  ]

  



  return (
    <>


      <h1>SPREADs</h1>

      {

        users.map((user) => {
          <h1>{user.nombre}</h1>
        })


      }



    </>
  )
}

export default App
