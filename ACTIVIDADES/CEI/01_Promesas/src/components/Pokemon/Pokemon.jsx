import { useState, useEffect } from 'react'
import './Pokemon.css'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const dataPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 801)}`);
            const data = await response.json()
            setPokemon(data)


        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        dataPokemon()
    }, [])

    return (
        <>

            <h3>PokeApi</h3>

            <div className='Pokemon'>
                <h2 className='PokemonNombre'>{pokemon.name}</h2>
                <img className='PokemonImagen' src={pokemon.sprites.front_default} alt="" />
            </div>

        </>
    )
}

export default Pokemon;