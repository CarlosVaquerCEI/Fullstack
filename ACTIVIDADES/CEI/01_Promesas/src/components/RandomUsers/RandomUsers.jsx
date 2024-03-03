import { useState, useEffect } from "react";
import "./RandomUsers.css"

const RandomUsers = () => {
    const [users, setUsers] = useState([])

    const dataUsers = async () => {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=10`)
            const data = await response.json()
            setUsers(data.results)
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataUsers()
    }, [])


    return (
        <>
        <h3>Random Users API</h3>
        <div className="ListaUsuarios">
            {
                users.map((user) => {
                    return (
                        <>
                        <div className="ListaUsuarios-info">
                            <h5> {user.name.title} {user.name.first} {user.name.last} </h5>
                            <img className="ListaUsuarios-imagen" src={user.picture.large} alt="" />
                            <h7>Living in: {user.location.city}, {user.location.state} </h7>
                        </div>

                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export default RandomUsers;