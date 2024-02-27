import { useState, useEffect } from "react"

const BookForm = ({libro}) => {

    useEffect(() => {
        setFormData(libro)
        }, [libro])

    const [formData, setFormData] = useState(libro)

    const {titulo, autor, categoria, id} = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("ENVIANDO FORMULARIO CON REACT")

        try {
            const url = "http://localhost:3000/API/v1/libros/" + id;
            const response = await fetch (url, {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok) {
                throw new Error ("Hubo un probelma al enviar la información")
            }

            const responseData = await response.json()
            console.log(responseData)

        } catch (error){
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target // obtengo del input el nombre y el valor
        setFormData({...formData, [name]:value}) // actualizo mi formData con el nuevo valor conservando los valores anteriores
    }




    return (
        <>

        <form onSubmit={handleSubmit} className="main-form">
            <label htmlFor="">Nombre del libro</label>
            <input 
                type="text" 
                className="input-control"
                name="titulo"
                value={titulo}
                placeholder="Ingrese título del libro"
                onChange={handleInputChange}
                />
                <br />

            <label htmlFor="">Autor del libro</label>
                <input 
                    type="text" 
                    className="input-control"
                    name="autor"
                    value={autor}
                    placeholder="Ingrese nombre del autor"
                    onChange={handleInputChange}
                />
                <br />

            <label htmlFor="">Categoría</label>
                <input 
                    type="text" 
                    className="input-control"
                    name="categoria"
                    value={categoria}
                    placeholder="Ingrese la categoría del libro"
                    onChange={handleInputChange}
                />

                <button type="submit">Guardar</button>
        </form>
        
        </>

    )
}

export default BookForm