const http = require("http");
const cowsay = require("cowsay")

const server = http.createServer( (req, res) => {
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