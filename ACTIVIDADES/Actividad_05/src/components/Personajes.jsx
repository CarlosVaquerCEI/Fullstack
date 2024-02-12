import { useEffect, useState } from "react"


const PageButtons = (props) => {
    return (
        <>
        
        <p className="numeracionPagina">Página: </p>


        <button className="botonDetras" onClick={()=> {
            if (props.pagina > 1) {
                props.setPagina(props.pagina -1)
            }
        }}>Página {props.pagina -1}</button>

        <button className="botonDelante" onClick={() => props.setPagina(props.pagina + 1)}>Página {props.pagina +1}</button>
        
        </>
    )
}

export const Personajes = () => {

    // Parte 1
    useEffect(() => {
        obtenerDatos()
    }, []) // cuando se crea el componente por primera vez, se carga el array vacío

    const [data, setData] = useState({ info: {}, results: [] })
    const [pagina, setPagina] = useState(1)



    // Parte 2

    const obtenerDatos = async () => {
        const respuestaPersonajes = await fetch("https://rickandmortyapi.com/api/character")
        const jsonDataPersonajes = await respuestaPersonajes.json()

        setData(jsonDataPersonajes)

    }

    // Parte 3

    return (
        <>
        
        <PageButtons/>
        
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





