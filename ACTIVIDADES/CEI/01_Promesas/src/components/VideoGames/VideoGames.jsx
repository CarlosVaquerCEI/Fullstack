import { useState, useEffect } from "react";
import "./VideoGames.css"

const VideoGames = () => {

    const [videogames, setVideogames] = useState([])

    const dataVideogames = async () => {
        try {
            const response = await fetch(`https://api.rawg.io/api/games?key=da53132ee5224267baa6e78cf3c3f540`);
            const data = await response.json();
            setVideogames(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        dataVideogames()
    }, [])

    return (
        <>

            <h3>Video Games Database API</h3>

            <div className="ListaVideojuegos">
                {
                    videogames.map((game) => {
                        return (
                            <>

                                <div className="Juego">
                                    <h5 className="JuegoNombre">
                                        {game.name} </h5>
                                        <img className='JuegoImagen' src={game.background_image} alt="" />
                                   
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default VideoGames;