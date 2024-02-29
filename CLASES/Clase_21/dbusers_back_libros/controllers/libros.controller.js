import misDatos from "../db/datos.js"
import { Libros } from "../index.js"

const listaLibros = misDatos.libros



// formato de respuesta
const responseAPI = {
    data: listaLibros,
    msg: "",
    status: "ok"
}


export const getAllLibros = async (req, res) => {
    const users = await Libros.findAll()
    res.json(users)
}


export const createLibro = async (req, res) => {

    const user = await Libros.create(req.body)
    res.json(user)
}


export const getLibroById = async (req, res) => {
    const user = await Libros.findByPk(req.params.id)
    res.json(user)
}


export const updateLibro = async (req, res) => {

    const user = await Libros.findByPk(req.params.id)
    if(user){
        await user.update(req.body)
        res.json(user)
    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
}


export const deleteLibro = async (req, res) => {

    const user = await Libros.findByPk(req.params.id)
    if(user){
        await user.destroy(req.body)
        res.json({msg: "usuario eliminado correctamente"})
    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }

}