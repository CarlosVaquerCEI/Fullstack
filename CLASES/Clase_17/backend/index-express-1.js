const express = require("express");

const app = express();
console.clear()


/* ----------------------

EJEMPLOS DE RUTAS CON EXPRESS

------------------------*/

app.get("/", (req, res) => { // función de callback
    res.send("Bienvenido a Express.js") // hacemos el return de la información con send
    console.log("El usuario entró al home")
})

app.get("/perfil", (req, res) => {
    res.send("Bienvenido a Perfil")
    console.log("El usuario entró al home")
})

app.post("/users", (req, res) => { // con get obtenemos información, la enviamos a través de la url y con post se crea y se manda, get y post es el método de comunicación entre frontend y backend
    res.send("Sección Usuarios con POST");
    console.log("El usuario realizó un POST a users")
})
app.get("/users", (req, res) => {
    res.send("Sección Usuarios con POST");
    console.log("El usuario realizó un POST a users")
})

// GET manda información a través de la url 
// POST manda información internamente, el método para comunicarse con el backend

// Métodos más comunes: GET, POST(crear elementos), PUT (actualizar), DELETE (borrar), OPTIONS (comunicarse con el servidor)


// el método All habilita cualquier método anterior
app.all("/metodos", (req, res) => {
    res.send("<h3>Realiza todos los métodos GET, POST, PUT, DELETE, OPTIONS</h3>");
    console.log("El usuario realizó un ALL a users");
})


app.route("/libros") // route para concatenar varios métodos
    .get((req, res) => {
        res.send("Obtener libros")
    })
    .post((req, res) => {
        res.send("Agregar nuevos libros")
    })
    .put((req, res) => {
        res.send("Actualizar un libro X")
    })

app.get ("/jsonUser", (req,res) => {
    // metodos de 200 a 300 bien
    // 300 a 400 te manda a otra pagina
    // 400 a 500 error
    res.status(404)
    res.type("json")
    res.json({nombre: "Sofía", id: 5, edad: 25})

})

app.get("*", (req, res) => { // * para que cualquier otra dirección va a caer en esta función
    res.send("<h3>Error 404 Not Found</h3>")
    console.log("Usuario accede a ruta inexistente")
})



app.listen(8080, () => {
    console.log("Servidor express corriendo en puerto 8080");
})


