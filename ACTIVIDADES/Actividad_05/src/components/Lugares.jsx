import { useEffect, useState } from "react"

export const Lugares = () => {

    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, [])

    const [data, setData] = useState({})

    // Parte 2

    const obtenerDatos = async () => {
        const respuestaLugares = await fetch("https://rickandmortyapi.com/api/location")
        const jsonDataLugares = await respuestaLugares.json()

        setData(jsonDataLugares)
    }

    // Parte 3

    return (
        <>
            <h1>Lugares</h1>

        
        </>)
}

