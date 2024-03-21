import { connection } from "../index.js"


const responseAPI = {
    data: [],
    msg: "",
    status: "ok"
}

export const getAllLibros = async (req, res) => {
    // const libros = await Libros.findAll()

const [results, fields] = await connection.query(

    `SELECT libros.*, autores.autor, categorias.categoria 
    FROM libros 
    JOIN autores ON (libros.id_autor = autores.id) 
    LEFT JOIN link_libros_categorias link ON (libros.id = link.id_libro)
    LEFT JOIN categorias ON (categorias.id = link.id_categoria)
    
    WHERE libros.deleted_at IS NULL`
)

    responseAPI.data=results
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const createLibro = async (req, res) => {


    const {titulo, id_autor=0, cali=0, lanzamiento=0, editorial="", precio=0, cant_vendidos=0, num_paginas=0} = req.body

    if(titulo == "" || id_autor == 0) {
        responseAPI.msg="Error al crear codigo";
    }

    const sqlQuery = `INSERT INTO libros 
    (libro, id_autor, calificacion, lanzamiento, editorial, precio, cant_vendidos, num_paginas) 
    VALUES 
    ('${titulo}', '${id_autor}', '${cali}', '${lanzamiento}', '${editorial}', '${precio}', '${cant_vendidos}', '${num_paginas}');`;

    console.log(sqlQuery)


    const [newBook, fields] = await connection.query(sqlQuery)
    
    responseAPI.data=newBook
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

    const {titulo, id_autor=0, cali=0, lanzamiento=0, editorial="", precio=0, cant_vendidos=0, num_paginas=0} = req.body
    const id_libro = req.params.id

    const sqlU = `UPDATE libros 
    SET libro = '${titulo}', id_autor = '${id_autor}', calificacion = '${cali}', lanzamiento = '${lanzamiento}', editorial = '${editorial}', precio = '${precio}', cant_vendidos = '${cant_vendidos}', num_paginas = '${num_paginas}'
     WHERE libros.id = ${id_libro};`;


    const [libroActualizado, fields] = await connection.query(sqlU)


    if(libroActualizado){
        // await libroActualizado.update(req.body)
        responseAPI.data=libroActualizado
        responseAPI.msg="Actualizar libro"
        responseAPI.status="ok"
        res.status(200).send(responseAPI)
    }else {
        res.status(404).json({msg: "libro no encontrado"})
    }
}


export const deleteLibro = async (req, res) => {

    const {titulo, id_autor=0, cali=0, lanzamiento=0, editorial="", precio=0, cant_vendidos=0, num_paginas=0} = req.body
    const id_libro = req.params.id

    const sqlD = `DELETE FROM libros WHERE id = ${id_libro}`


    const [libroEliminado, fields] = await connection.query(sqlD)



    if(libroEliminado){
        responseAPI.data=libroEliminado;
        // await libroEliminado.destroy(req.body)
        responseAPI.msg="Libro eliminado"
        res.status(200).send(responseAPI)
    }else {
        res.status(404).json({msg: "usuario no encontrado"})
    }
}