import misDatos from "../db/datos.js"

const listaLibros = misDatos.libros



// formato de respuesta
const responseAPI = {
    data: listaLibros,
    msg: "",
    status: "ok"
}


export const getAllLibros = (req, res) => {
    responseAPI.data=listaLibros
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const createLibro = (req, res) => {
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}


export const getLibroById = (req, res) => {
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}


export const updateLibro = (req, res) => {
    // 1. recibir datos del body (json)
    console.log(req.body)
    const {id, titlo, autor, categoria} = req.body



    // 2. obtener de la lista de libros el libro que quiero editar
    const index = listaLibros.findIndex(libro => libro.id == id)

    // 3. actualizar el libro con los nuevos valores

    listaLibros[index] = {
        ...listaLibros[ndex],
        titulo,
        autor,
        categoria
    }

    // 4. respondo con la nueva lista de libros ACTUALIZADA
    

    responseAPI.data=""
    responseAPI.msg="Actualizar libro"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}


export const deleteLibro = (req, res) => {
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}