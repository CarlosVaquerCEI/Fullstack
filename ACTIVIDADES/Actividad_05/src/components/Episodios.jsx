import { useEffect, useState } from "react"

export const Episodios = () => {


    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, [])

    const [data, setData] = useState({})

    // Parte 2

    const obtenerDatos = async () => {
        const respuestaEpisodios = await fetch("https://rickandmortyapi.com/api/episode")
        const jsonDataEpisodios = await respuestaEpisodios.json()

        setData(jsonDataEpisodios)
    }

    // Parte 3

    return (
        <>
            <h1>Episodios</h1>

            {
                data.results?.map((personaje) => {
                    return (
                        <h4>{personaje.name}</h4>
                    )
                })
            }
        </>)

}

