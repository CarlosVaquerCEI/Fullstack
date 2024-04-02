import express, { urlencoded } from "express"
import cors from 'cors'
import router from "./routes/index.routes.js"

// archivo de configuración
import dotenv from 'dotenv'
dotenv.config()

const app = express()
console.clear()


//MIddleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true})) // req.body , cuando lea el req.body lo va a poder procesar

app.get("/", (req, res, next) => {
    res.setHeader("Content-Type", "text/html")
    const landingHTML = `<h1>Bienvenidos al Auth API con JWT </h1>`
    res.send(landingHTML)
})

app.use("/API/", router)

app.listen(3000, ()=> {
    console.log("Server running en https://localhost:3000")
})