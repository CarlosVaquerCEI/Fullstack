import { useEffect, useState } from "react"

export const Lugares = () => {

    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, [])

    const [data, setData] = useState({ info: {}, results: [] })

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


            {
                data.results.map((lugares) => {
                    return (
                        <>

                            <div className="grid-lugares">

                                <div className="data-lugares">
                                    <h2>{lugares.name}</h2>

                                    <h5>{lugares.type} - {lugares.dimension}</h5>
                                </div>



                            </div>

                        </>


                    )
                })
            }


        </>)
}

