import express from "express"
import datos from "./db/db.js"
import {PORT, domain} from "./config/config.js"
import indexRoutes from "./routes/index.routes.js"

const app = express()
console.clear()

const listaLibros = datos.libros


// MIDDLEWARES
// Express lo utiliza para recibir el body como json necesario para leer el req.body
app.use(express.json())

app.use("/API/v1/", indexRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})