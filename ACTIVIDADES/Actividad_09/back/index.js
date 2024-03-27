import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {PORT, fullDomain, user, pass, db} from './config/config.js'
import { router } from "./routes/index.routes.js"


const app = express()
console.clear()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/uploads', express.static('uploads'))

// const connect = async () => {

//     const url = `mongodb+srv://${user}:${pass}@carlosvaquercei.wdhjvbe.mongodb.net/${db}`

//     await mongoose.connect(url)
//     .then(() => console.log("Conectado a MongoDB Atlas ONLINE"))
//     .catch(e => console.log("Error en la conexión", e))
// }

//     connect()

app.get("/", async (req, res)=> {
    res.send("HOLA");
})

app.use("/API/v1/", router) 


app.listen(PORT, () => {
    console.log(`Serverrrrrr running on ${fullDomain}`)
})









/*

// Expresiones Regulares (RegEx)

// en vez de usar "ejemplo" las regex usan /ejemplo/

const regex1 = /juan/
const texto = "Mi nombre es Carlos"

// Flags
const regex2 = /juan/i // no diferencia mayúsculas de minúsculas
const regex3 = /juan/g // obtiene todos los resultados en vez del primero
const regex4 = /juan/m // es para buscar en múltiples líneas (separadas con \n o enter)
const regex5 = /juan/gmi // son combinables

// Metacaracteres $, ^, ., \w, \s

const regex6 = /^Hola/gm // busca mi string al principio de cada línea
const regex7 = /Mundo$/gm // busca mi string al final de cada línea
const regex8 = /Ju.n/gm // "Ju" seguido de cualquier caracter, seguido de "n", números también
const regex9 = /\w/gm // devuelve todos los elementos que no sean ni espacios, ni símbolos, ni enters
const regex10 = /\s/gm // busca cualquier caracter de espacio en blanco

// Agrupación []
const regex11 = /[aeiou]/gm // buscar palabras
const regex12 = /[a-z]rbol/gm // agrupo rango de letras de a-z
const regex13 = /[a-zA-Z0-9]/gm // combino distintos rangos

// utilizando Match 
const encontrados = texto.match(regex3)
console.log(encontrados)

// const isEncontrado = texto.test(regex3) // devuelve true o false si encontró un match
// console.log(isEncontrado) 

*/