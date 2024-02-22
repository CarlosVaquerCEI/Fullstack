import express from "express"
import datos from "./db/db.js"

const PORT = 8080
const domain = "http:localhost/"

const app = express()
console.clear()

const listaLibros = datos.libros

// es el formato que va a tener mi respuesta en todas mis consultas del API
const responseLibros =  {
    data: listaLibros,
    msg:"",
}

const helperCleanString = (str) => {
    return str.toString().trim().toLowerCase()
}

app.get("/libros", (req, res) => {

    responseLibros.data= listaLibros
    responseLibros.msg="Todos los libros"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)

})

app.get("/libros/:id", (req, res) => {

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

})

app.get("/libros/author/:author", (req, res) => {

    const author=helperCleanString(req.params.author)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.autor).includes(author)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por autor"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)

})

app.get("/libros/cathegory/:cathegory", (req, res) => {
    const cate=helperCleanString(req.params.cathegory)

    responseLibros.data = listaLibros.filter((libro) => {
        helperCleanString(libro.categoria).includes(cate)
    })

    responseLibros.data= listaLibros
    responseLibros.msg="Libros por categoría"
    responseLibros.cant=listaLibros.length

    res.status(200).send(responseLibros)


})

app.get("/authors",(req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})