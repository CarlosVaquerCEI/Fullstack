import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js"


const app = express()

console.clear()


// app.use("/API/v1/", indexRoutes) 


app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})