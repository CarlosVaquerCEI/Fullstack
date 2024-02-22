import { Router } from "express";
import datos from "../db/db.js"
import { addLibro, getAllLibros, getLibroById, removeLibro, updateLibro } from "../controllers/libros.controller.js";

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

// router.get("/libros", (req, res) => {
//     responseLibros.data= listaLibros
//     responseLibros.msg="Todos los libros"
//     responseLibros.cant=listaLibros.length

//     res.status(200).send(responseLibros)
// })

router.get("/libros", getAllLibros)

router.get("/libros/:id", getLibroById)

router.get("/libros/author/:author", (req, res) => {

    const author=helperCleanString(req.params.author)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.autor).includes(author)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por autor"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)

})

router.get("/libros/cathegory/:cathegory", (req, res) => {
    const cate=helperCleanString(req.params.cathegory)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.categoria).includes(cate)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por categoría"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)


})

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

export default router