import express from "express"
import datos from "./db/db.js"

const app = express()
console.clear()


app.get("/libros", (req, res) => {

    console.log(req)

    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData)
})

app.get("/libros/:id", (req, res) => {
    const idUsuario = req.params.id
    console.log("Libros por id")
    // res.send("Hola")    

})

app.get("/libros/author/:author", (req, res) => {
    const nombreUsuario = req.params.nombre
    console.log("Libros por nombre de autor")
    res.send("Hola autor")

})

app.get("/libros/cathegory/:cathegory", (req, res) => {
    const categoriaUsuario = req.params.cathegory
    console.log("Libros por categoría")
    res.send("Hola categoría")

})

app.get("/authors",(req, res) => {

})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})