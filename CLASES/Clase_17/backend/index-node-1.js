const http = require("http");
const cowsay = require("cowsay")

const server = http.createServer( (req, res) => {
    res.statusCode=200
    // le indico al cliente que voy a respondeer con html
    res.setHeader("Contenty-type", "text/html")

    let isRoute = false;

    console.log(req.url)

    res.write("<html>") 

    if(req.url == "/") {

        isRoute = true
        res.write("<head><tittle>Mi servidor Node</tittle></head>")
        res.write("<body><h1>Hola desde mi server</h1></body>")

    }


    if(req.url == "/perfil") {
        
        isRoute = true
        res.write("<head><tittle>Mi servidor Node</tittle></head>")
        res.write("<body><h1>Hola desde mi perfil</h1></body>")

    }

    if (!isRoute) {
 
        res.write("<body><h1>Error 404!!!</h1></body>")

    }


    res.write("</html>")
    res.end()
});

server.listen(8080, () => {
    console.log("Corriendo en puerto 8080")
})