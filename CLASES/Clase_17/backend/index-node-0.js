const http = require("http"); // require en vez de import ya que
const cowsay = require("cowsay")

const server = http.createServer( (req, res) => { // require es una petición, response un objeto que devuelve información
    // res.end("Hola desde mi servidor web")
    // res.end(cowsay.say({text: "Hola Mundo"}))

    res.write("<html>")
    res.write("<head><tittle>Mi servidor Node</tittle></head>")
    res.write("<body><h1>Hola desde mi server</h1></body>")
    res.write("</html>")

    res.end()
});

server.listen(8080, () => {
    console.log("Corriendo en puerto 8080")
})