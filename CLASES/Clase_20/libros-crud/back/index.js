import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js"
import { logger } from "./middlewares/logger.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from "./routes/index.routes.js";
import cors from 'cors'

const app = express()

console.clear();


// USO DE MIDDLEWARES
app.use(cors())
app.use(setHeaders)
app.use(express.json()); // procesa el json body para leerlo con req.body
app.use(logger)



// RUTAS
app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");

    const landingHTML = `
    <h1>Bienvenidos a nuestra API de Libros</h1>
    `
    res.send(landingHTML);
})

app.use("/API/v1/", indexRoutes)




// ALTA DEL SERVIDOR
app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})