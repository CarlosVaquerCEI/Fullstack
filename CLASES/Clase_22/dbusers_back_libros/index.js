import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js"
import { logger } from "./middlewares/logger.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from "./routes/index.routes.js";
import cors from 'cors'
import mysql from "mysql2/promise"


const app = express()
console.clear();


app.use(cors())           
app.use(setHeaders)         
app.use(express.json());    
app.use(logger)   
app.use(express.urlencoded({extended:false}))


export const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db_biblioteca"
})


// const [results, fields] = await connection.query(
//     "SELECT * FROM `libros` "
// )

// console.log(results)
// console.log(fields)




app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html"); 

    const landingHTML = `
    <h1>Bienvenidos a nuestra API de Libros</h1>
    `
    res.send(landingHTML);
})


app.use("/API/v1/", indexRoutes) 


app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})