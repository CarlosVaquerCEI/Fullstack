import datos from "../db/db.js"


const listaLibros = datos.libros
// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros =  {
    data: listaLibros,
    msg:"",
}


// obtener todos los libros
export const getAllLibros = (req, res) => {
    responseLibros.data= listaLibros
    responseLibros.msg="Todos los libros"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)
}

export const getLibroById = (req, res) => {
        // dento del req hay un objeto vacio que es params, pero en el momento que se rellene la url se rellenan los valores de params

        const idLibro = req.params.id
        console.log(req.params)
    
        // reviso si id es un número
        if(isNaN(idLibro))  {
            responseLibros.msg="El id debe ser un libro"
            delete responseLibros.data
            res.status(400).send(responseLibros)
        }
    
        responseLibros.data= listaLibros.find((libro) => {
            libro.id==idLibro
        })
        responseLibros.msg="Libro con id" + idLibro
        console.log("Libros por id")
        res.send(responseLibros)
}

export const getLibroByAutor = (req, res) => {

    const author=helperCleanString(req.params.author)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.autor).includes(author)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por autor"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)

}

export const getLibroByCategoria = (req, res) => {
    const cate=helperCleanString(req.params.cathegory)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.categoria).includes(cate)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por categoría"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)


}

export const addLibro = (req, res) => 
    {
        console.log(req.body)
    
        const {titulo, autor, categoria} = req.body
    
        const newId = Math.random()
    
        responseLibros.data.push({id:newId, titulo, autor, categoria})
        responseLibros.msg="Libro agregado con éxito"
    
        res.send(responseLibros)
    
    
}

export const removeLibro = (req, res) => {
    console.log(req.id)
    
        const idLibro = req.params.id
        responseLibros.data.splice(index, 1)
        listaLibros.indexOf(index)
        responseLibros.msg="Libro eliminado con éxito"
    
        res.send(responseLibros)
}

export const updateLibro = (req, res) => {

}


