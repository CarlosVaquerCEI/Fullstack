import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {PORT, fullDomain, user, pass, db} from './config/config.js'


const app = express()
console.clear()

// uso de middlewares
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const connect = async () => {

    const url = `mongodb+srv://${user}:${pass}@carlosvaquercei.wdhjvbe.mongodb.net/${db}`

    await mongoose.connect(url)
    .then(() => console.log("Conectado a MongoDB Atlas ONLINE"))
    .catch(e => console.log("Error en la conexión", e))
}

    connect()

app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})