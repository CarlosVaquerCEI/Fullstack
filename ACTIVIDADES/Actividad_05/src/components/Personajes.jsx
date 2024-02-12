import { useEffect, useState } from "react"



export const Personajes = () => {

    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, []) // cuando se crea el componente por primera vez, se carga el array vacío

    const [data, setData] = useState({ info: {}, results: [] })

    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({
        species: "",
        status: "",
        name: "",
    })

    const [filterResults, setFilterResults] = useState([])

    const {info = {}, results = []} = data

    useEffect(() => {
        console.clear()
        setTimeout(() => {
            fetchCharacters(), 1000
        })
    })

    



    // Parte 2

    const obtenerDatos = async () => {
        const respuestaPersonajes = await fetch("https://rickandmortyapi.com/api/character")
        const jsonDataPersonajes = await respuestaPersonajes.json()

        setData(jsonDataPersonajes)

    }

    // Parte 3

    return (
        <>

        
            <h1>Personajes</h1>



            {
                data.results.map((personaje) => {
                    return (
                        <>

                            <div className="grid-personajes">

                                <h4>{personaje.name}</h4>
                                <img src={personaje.image} />
                                <h5>{personaje.species} - {personaje.gender}</h5>
                                <h5>{personaje.status} / {personaje.origin.name}</h5>

                            </div>

                        </>


                    )
                })
            }
        </>)

}





