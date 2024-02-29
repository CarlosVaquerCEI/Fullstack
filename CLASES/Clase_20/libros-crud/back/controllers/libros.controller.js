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

    const {titulo, autor, categoria} = req.body
    const newID = Math.random()

    listaLibros.push({id:newID, titulo, autor, categoria})

    responseAPI.data=listaLibros
    responseAPI.msg="Crear nuevo libro"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const getLibroById = (req, res) => {
    responseAPI.data=""
    responseAPI.msg="Obtener Libros"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const updateLibro = (req, res) => {

    // 1. recibir datos del body (json)
    console.log(req.body)
    console.clear()
    const {id, titulo, autor, categoria} = req.body



    // 2. obtener de la lista de libros el libro que quiero editar
    const index = listaLibros.findIndex(libro => libro.id == id) // id del body sea igual que id del parametro libro y así devuelva true

    // 3. actualizar el libro con los nuevos valores

    listaLibros[index] = {
        ...listaLibros[index],
        titulo,
        autor,
        categoria // hago el spread para coger toda la información del libro indicado con index, saco todas sus propiedades, pero primero actualizo titulo, autor y categoria
    }

    // 4. respondo con la nueva lista de libros ACTUALIZADA
    

    responseAPI.data=listaLibros
    responseAPI.cant=listaLibros.length
    responseAPI.msg="Actualizar libro"
    responseAPI.status="ok"
    res.status(200).send(responseAPI)
}


export const deleteLibro = (req, res) => {

    console.clear()

    // obtener el id de la url no del body ej: https/:dominio.com/:id / con el body puedes sacar más información, tiene más datos
    const idLibro = req.params.id 

    // obtener de la lista de libros, el indice del libro a eliminar, la posición que tiene en el array
    const index = listaLibros.findIndex(libro => libro.id == idLibro)

    if(index !== -1) { // findIndex si no encuentra ningún elemento en el array devuelve -1

        // eliminar el item del array
        responseAPI.data=listaLibros[index]
        listaLibros.splice(index,1) // eliminar un item desde el indice seleccionado
        responseAPI.msg="Libro eliminado"
        res.status(200).send(responseAPI)
    } else {
        responseAPI.msg="No se encontró un libro para eliminar"
        res.status(404).send(responseAPI)
    }



}