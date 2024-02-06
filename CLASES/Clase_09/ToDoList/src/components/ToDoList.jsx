import { useState } from "react";

const ToDoList = () => {

    // esta info la traje de la base de datos
    let tareasData = [
        {
            id: 1,
            hora: 8,
            accion: "Desayunar",
            obligatorio: true
        },
        {
            id: 2,
            hora: 10,
            accion: "Ir al gimnasio",
            obligatorio: false
        },
        {
            id: 3,
            hora: 13,
            accion: "Comer",
            obligatorio: true
        },
        {
            id: 4,
            hora: 15,
            accion: "Jugar Fortnite",
            obligatorio: false
        },
        {
            id: 5,
            hora: 17,
            accion: "Trabajar Verdecora",
            obligatorio: true
        },
        {
            id: 6,
            hora: 22,
            accion: "Cenar y domir",
            obligatorio: true
        },
    ]


    const [tareas, setTareas] = useState(tareasData);

    //texto para el input
    const [textoTarea, setTextoTarea] = useState('')

    const agregarTarea = () => {
        console.log("Agregar Tarea")
        setTareas([...tareas,{
            id: 7,
            hora: 22,
            accion: "Cenar y domir",
            obligatorio: true
        }])
    }

    const completarTarea = () => {
        console.log("Completar Tarea")
    }

    return (
        <>

        <h2>To Do List</h2>

        <input type="text" placeholder="Nueva Tarea" value={textoTarea} 
        onChange={(e)=> {
            setTextoTarea(e.target.value)
        }}
        />
        
        <button onClick={agregarTarea}> 
        AGREGAR TAREA
        </button>

        <ul>
            {
                tareas.map((tarea) => (
                    <li key={tarea.id}>{tarea.accion}</li>
                ))
            }
        </ul>

        </>
    )
}

export default ToDoList;