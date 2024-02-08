import { useEffect, useState } from "react"

export const Personajes = () => {

    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, [])
    const [data, setData] = useState({})

    // Parte 2

    const obtenerDatos = async () => {
        const respuestaPersonajes = await fetch("https://rickandmortyapi.com/api/character")
        const jsonDataPersonajes = await respuestaPersonajes.json()

        setData(jsonDataPersonajes)
        console.log("data es", jsonDataPersonajes)


    
    }

    // Parte 3

    return(
    <>
    <h1>Personajes</h1>

    {
        data.results?.map((personaje) => {
            return(
                <h1>{personaje.name}</h1>
            )
    })
    }
    </>)

}


    

    
