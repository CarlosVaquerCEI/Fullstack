import express from "express" // Es module
import { PORT } from "./config.js";
import { timeLog } from "./middlewares/logger.js";

import * as xmlbuilder from 'xmlbuilder'

/**
 * 
 *  MOSTRAR  DISTINTOS TIPOS DE DATOS EN RESPUESTA
 * 
 *  - Response en JSON
 *  - Response en XML
 *  - Response en YML (No la utilizaremos)
 *  - Response en HTML
 */

const app = express()
console.clear()


const datos = {
    id: 25,
    nombre: "María Escarmiento",
    email: "mariaescarmiento@gmail.com"
}

// utiliza el middleware timeLog    
app.use(timeLog)

app.get("/", (req, res) => {
    res.send("Hola")
})

app.get("/resp-json", (req, res) => {

    // converti mi elemento JS a un string JSON
    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type", "application/json")
    res.send(jsonData)
})

app.get("/resp-xml", (req, res) => {
    const xml = xmlbuilder.create('data')
    .ele('id', datos.id)
    .up()
    .ele('nombre', datos.nombre)
    .up()
    .ele('email', datos.email)
    .end({pretty: true})

    res.header('Content-type', 'application/xml')
    res.send(xml)
})

app.get("/resp-html", (req, res) => {
    const html =
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jesús Parfer</title>
        <link rel="stylesheet" href="styles.css">
        <script defer src="dark-mode.js"></script>
    </head>
    <body>
    <div>
    <h1>Id: ${datos.id}</h1>
    <h2>Nombre: ${datos.nombre}</h2>
    <p>Email: ${datos.email}</p>
    </body>
    </html>
    `
    
    res.header("Content-type", "text/html")
    res.send(html)
})

app.get("/usuarios/:idusuarios/:nombre", (req, res) => {
    console.log(req)
    
    // recibimos parámetros de la url
    const idUsuario = req.params.idUsuario
    const nombre = req.params.nombre

    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-type", "application/json")
    res.send(jsonData)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})