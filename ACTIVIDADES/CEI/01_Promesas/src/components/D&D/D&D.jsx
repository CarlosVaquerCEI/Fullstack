import { useState, useEffect } from "react";
import "./D&D.css"

const DungeonsDragons = () => {
    const [dungeonsDragons, setDungeonsDragons] = useState([])

    const dataDyD = async () => {
        try{
            const response = await fetch(`https://www.dnd5eapi.co/api/monsters/`)
            const data = await response.json()
            setDungeonsDragons(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataDyD();
    }, []);


    return (
        <>
        <h3>Dungeons & Dragons API</h3>

        <div className="ListaDyD">
            {
                dungeonsDragons.map((dyd) => {
                    return (
                        <>
                        
                        <h4>{dyd.name}</h4>
                        <img src={dyd.image} alt="" />
                        <h5>{dyd.gender}</h5>
                        
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export default DungeonsDragons;