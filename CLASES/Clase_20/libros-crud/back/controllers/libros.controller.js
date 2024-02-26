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
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}


export const deleteLibro = (req, res) => {
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    responseAPI.status(200).send(responseAPI)
}