import { useState } from "react"
import Confetti from 'react-confetti'

export const TodoList = ({ listaTareas }) => {

    /*-----------------------------------------------------------
    1. USO DE HOOKS Y DECLARACION DE VARIABLES
    ------------------------------------------------------------*/

    const [tareas, setTareas] = useState(listaTareas)
   
    //Texto para el input
    const [textoTarea, setTextoTarea] = useState("")

    console.log("tareas es", tareas);


    /*-----------------------------------------------------------
    2. CREACION DE FUNCIONES
    ------------------------------------------------------------*/

    const agregarTarea = () => {
        console.log("Agregando tarea")
        const nuevaTarea = textoTarea.trim() // para quitar espacios del final

        if (nuevaTarea) {

            const random = Math.floor(Math.random() * 1000); // para añadir un numero del 0 al 1, por 1000 para que sea hasta mil, y el floor quita los decimales

            const tareaModificable = [...tareas, {
                id: random,
                tarea: nuevaTarea,
                isCompletada: false
            }]

            setTareas(tareaModificable); // guardar datos
            setTextoTarea(""); // limpiar el input
        }
    }

    const completarTarea = (id) => {
        // creo una copia de mis tareas porque la variable useState no se debe modificar directamente, es de solo lectura
        const tareaModificable = [...tareas]

        // Obtener la tarea - necesito el id

        // const tarea = tareas.find((t) => t.id == id)

        // Obtenemos el indice de la tarea
        const index = tareaModificable.findIndex((t) => t.id == id)

        // Hacer modificaciones

        tareaModificable[index].isCompletada = !tareaModificable[index].isCompletada
        setTareas(tareaModificable)

    }

    const eliminarTarea = (id) => {

        const tareaModificable = tareas.filter((t) => t.id != id)
        setTareas(tareaModificable)

    }

    const Tarea = ({ id, tarea, isCompletada }) => {
        return(
            <li className="item">

            <span onClick={() => completarTarea(id)}>{tarea}</span>
            <button onClick={() => eliminarTarea(id)}>X</button>

        </li>
        )
      
    }

    /*-----------------------------------------------------------
3. CREACION DE VISTAS / INTERFAZ GRAFICA
------------------------------------------------------------*/

    return (
        <>

            <h2>To Do List</h2>
            <input type="text" placeholder="Nueva Tarea" value={textoTarea} onChange={(e) => {
                setTextoTarea(e.target.value)
            }} />

            <button onClick={agregarTarea}>Agregar</button>
            
            <h3>😉{textoTarea}😉</h3>

            <h3>Tareas pendientes</h3>

            <ul>

                {
                    // Si no hay tareas pendientes, mostrar mensaje
                    tareas.filter((t) => t.isCompletada == false).length == 0 && (
                        <>No Hay Tareas Pendientes
                            <Confetti
                            numberOfPieces="1000"
                            recycle={false} />
                        </>                    
                        )
                }

                {
                    tareas.map((tarea) => 
                    {
                        if(!tarea.isCompletada) {
                            return (<Tarea key={tarea.id} {...tarea}/>)
                        }
                    }
                    )


                }
            </ul>

            <h3>Tareas terminadas</h3>

            <ul>

                {
                    tareas.map((tarea) => 
                    {
                        if(tarea.isCompletada) {
                            return (<Tarea key={tarea.id} {...tarea}/>)
                        }
                    }
                    )


                }
            </ul>
        </>
    )
}