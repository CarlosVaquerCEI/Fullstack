import express from "express"
import cors from "cors"

import mongoose, { mongo } from "mongoose"

const app = express()
console.clear()

//Uso de middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const connect = async () => {
    const USER = "cvaquer99"
    const PASS = "DmsJmf7UTg9s%40Gk"
    const DB = "CEI"

    const url = `mongodb+srv://${USER}:${PASS}@carlosvaquercei.wdhjvbe.mongodb.net/${DB}`
    await mongoose.connect(url)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch(e => console.log("Error en la conexión", e))
}
    connect()

    const options = {
        collection: 'usuarios'
    }

    const alumnoSchema = new mongoose.Schema({
        name: String,
        username: String,
        email: String,
        edad: Number,
        isAdmin: Boolean,
        hobbies: Array
    }, options)


    const Alumno = mongoose.model("Alumno", alumnoSchema)

app.get("/", async (req, res, next) => {

    const result = await Alumno.find()
    res.json(result)
})

app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000")
})