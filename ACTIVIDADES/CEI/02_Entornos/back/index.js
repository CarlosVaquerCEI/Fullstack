import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js"


const app = express()

console.clear()

app.use(cors());
app.use("/API/v1/", indexRoutes) 

app.get("/", (req, res) => {

    try {
        res.status(200).send("En buen funcionamiento")

    } catch (error) {
        res.status(500).send("Error 500")
    }

})


app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})