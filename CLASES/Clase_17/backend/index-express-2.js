// importar via CommonJS la librería Express
const express = require("express")
console.clear()

/* ----------------------

EJEMPLOS DE MIDDLEWARES ANIDADOS CON EXPRESS

------------------------*/

// la libreria express trabaja con clases, creamos app para que tenga todas las funciones de Express
const app = express()


// ENVIAR INFORMACIÓN LUEGO DE CUMPLIR EL TIMEOUT
app.get("/ejemplo/a", (req, res, next) => {
    console.log("La respuesta será enviada luego del timeout")
    setTimeout(() => {
        console.log("Timeout de 2 seg")
        next()
    }, 2000)

}, (req, res) => {
    console.log("Llegaste a la segunda función")
    res.send("Llegaste a la segunda función")
})

// ENVIAR INFORMACIÓN AL USUARIO, MIENTRAS EL SERVIDOR SIGUE TRABAJANDO

app.get("/ejemplo/b", (req, res, next) => {
    console.log("La respuesta será enviada antes de finalizar el timeout")
    next()
    setTimeout(() => {
        console.log("Timeout de 2 seg")
    }, 2000)

}, (req, res) => {
    console.log("Llegaste a la segunda función")
    res.send("Llegaste a la segunda función")
})


// CREAMOS UNA PROMESA ANTES DE ENVIAR DATOS
app.get("/ejemplo/c", (req, res, next) => {
    console.log("La respuesta será enviada una vez cumplida la promesa")

    new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Timeout de 2 seg")
        }, 2000)
        resolve() // resolve si funciona bien, si no lo lográ cumplir se ejecuta la función reject
    }).then(() => {
        // usamos .then para llamar a next cuando se resuelva la promesa
        // si hay un reject nos iriamos a .catch
        next()
    })

}, (req, res) => { // finally se ejecuta siempre al final
    res.send("Promesa CUMPLIDA")
})



app.listen(8080, () => {
    console.log("Servidor corriendo en 8080")
})