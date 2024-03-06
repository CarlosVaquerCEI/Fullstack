import misDatos from "../db/datos.js"
//import { Libros } from "../index.js"
import { connection } from "../index.js"

const listaLibros = misDatos.libros


const responseAPI = {
    data: listaLibros,
    msg: "",
    status: "ok"
}

export const getAllLibros = async (req, res) => {
    // const libros = await Libros.findAll()

const [results, fields] = await connection.query(
    "SELECT * FROM `libros` JOIN autores ON (libros.id_autor = autores.id) WHERE libros.deleted_at IS NULL"
)

    responseAPI.data=results
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const createLibro = async (req, res) => {

    const [results, fields] = await connection.query(
        "INSERT INTO `libros` (`id`, `libro`, `id_autor`, `calificacion`, `lanzamiento`, `editorial`, `precio`, `cant_vendidos`, `num_paginas`, `created_at`, `updated_at`, `deleted_at`)"
    )

    
    responseAPI.data=libro
    responseAPI.msg="Crear nuevo libro"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const getLibroById = async (req, res) => {
    // const user = await Libros.findByPk(req.params.id)
    const id_libro = req.params.id;

    const [results, fields] = await connection.query(
        `SELECT libros.* , autores.autor FROM libros 
        JOIN autores ON (libros.id_autor = autores.id) 
        WHERE libros.id = ${id_libro} 
        AND libros.deleted_at IS NULL`
    )

    res.json(results)
}


export const updateLibro = async (req, res) => {

    const [results, fields] = await connection.query(
        "UPDATE `libros` SET `id`,`libro`,`id_autor`,`calificacion`,`lanzamiento`,`editorial`,`precio`,`cant_vendidos`,`num_paginas`,`created_at`,`updated_at`,`deleted_at`"
    )



    if(results){
        await results.update(req.body)
        responseAPI.data=results
        responseAPI.msg="Actualizar libro"
        responseAPI.status="ok"
        res.status(200).send(responseAPI)
    }else {
        res.status(404).json({msg: "libro no encontrado"})
    }
}

export const deleteLibro = async (req, res) => {

    const [results, fields] = await connection.query(
        "DELETE FROM `libros` WHERE "
    )



    if(results){
        responseAPI.data=results;
        await results.destroy(req.body)
        responseAPI.msg="Libro eliminado"
        res.status(200).send(responseAPI)
    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
}