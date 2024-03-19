import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {

    // Declaro las variables

    const [data, setData] = useState([])
    const {VITE_DATA} = import.meta.env

    // Declaro las funciones

    const getApi = async () => {
        const controller = new AbortController()

        let opciones = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },

        }

        fetch(VITE_DATA, opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setData(data)
            }).catch(error =>{
                console.log(error)
            })
            .finally(() => {
                controller.abort();
            })
    }

    useEffect(() => {
        getApi()

}, [])

return (
    <div className='Header'>
    <h1> {data.title} </h1>
    <p> {data.description} </p>
    </div>
    )
}

export default Header