const express = require("express")

/* ----------------------

EJEMPLOS DE MIDDLEWARES CON EXPRESS

------------------------*/

const app = express()
const PORT = 3000
console.clear()

// Qué son los Middleware? - Son funciones que se ejecutan en medio de un proceso, en este caso en el medio de la petición y la respuesta
// Se ejecutan en el orden que se declaran
// Se pueden usar para validad datos, modificar o procesar la petición y la respuesta

function timeLog(req, res, next) {
    console.log("Time:", Date.now())
    next()
}

app.use(timeLog)


// ejemplo 2 (uso de multiples middlewares)

const middleware1 = function (req, res, next) {
    console.log("Registro guardado 1")
    //next()
}
const middleware2 = function (req, res, next) {
    console.log("Registro guardado 1")
    next()
}

app.use(middleware1, middleware2)


// ejemplo 3 - obtener información del Request()

app.use("/admin", (req, res, next) => {
    console.log(req)
    console.log("Request URL:", req.originalUrl)
    next()
}, (req, res, next) => {
    console.log("Request Type:" , req.method)
})



// app use es un middleware que siempre se ejecutará si es una función sin ruta (sin "/admin" por ejemplo)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})