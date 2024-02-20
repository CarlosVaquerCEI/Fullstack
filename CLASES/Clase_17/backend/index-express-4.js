import express from "express" // Es module
import { PORT } from "./config.js";
import { timeLog } from "./middlewares/logger.js";


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
app.use(timeLog)

app.get("/resp-json", (req, res) => {

    // converti mi elemento JS a un string JSON
    const jsonData = JSON.stringify(datos)
    res.setHeader("Content-Type, application/json")
    res.send(jsonData)
})

app.get("/", (req, res) => {
    res.send("Hola")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})