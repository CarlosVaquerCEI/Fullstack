import { Router } from "express";
import datos from "../db/db.js"
import { addLibro, getAllLibros, getLibroById, removeLibro, updateLibro, getLibroByAutor, getLibroByCategoria } from "../controllers/libros.controller.js";

const router = Router()

const listaLibros = datos.libros

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros =  {
    data: listaLibros,
    msg:"",
}

const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase()
}

// ------------------------------
//      RUTAS DE LIBROS
// ------------------------------

router.get("/libros", getAllLibros)
router.get("/libros/:id", getLibroById)
router.get("/libros/author/:author", getLibroByAutor)
router.get("/libros/cathegory/:cathegory", getLibroByCategoria)

// AGREGAR NUEVO LIBRO
router.post("/libros", addLibro)

//ELIMINAR LIBRO
router.delete("/libros/:id", removeLibro)

// ACTUALIZAR LIBRO
router.put("/libros/:id", updateLibro)





// ------------------------------
//      RUTAS DE AUTORES
// ------------------------------

router.get("/authors",(req, res) => {
    responseLibros.data = listaLibros.map((libro) => libro.autor)


    // usando forEach

    const uniqueAuthors =[]
    responseLibros.data.forEach((autor) => {
        if(!uniqueAuthors.includes(autor)) {
            uniqueAuthors.push(autor)
        }
    })

    responseLibros.data=uniqueAuthors


})


// ------------------------------
//      RUTAS DE CATEGORIAS
// ------------------------------

router.get("/cathegory",(req, res) => {
    responseLibros.data = listaLibros.map((libro) => libro.autor)


    // usando forEach

    const uniqueCathegories =[]
    responseLibros.data.forEach((categoria) => {
        if(!uniqueCathegories.includes(categoria)) {
            uniqueCathegories.push(categoria)
        }
    })

    responseLibros.data=uniqueCathegories


})

export default router