import { useEffect, useState } from "react"

export const Episodios = () => {


    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, [])

    const [data, setData] = useState({ info: {}, results: [] })

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
                data.results.map((episodio) => {
                    return (
                        <>

                            <div className="lista-episodios">
                                <h2>{episodio.name}</h2>
                                <h4>{episodio.episode}</h4>
                                <h5>{episodio.air_date}</h5>
                            </div>

                        </>

                    )
                })
            }
        </>)

}

