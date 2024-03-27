import dataProducts from "../db/dataProducts.js"

export const getAllProducts = async (req, res) => {
    console.log("HOLA")
    res.send(dataProducts)
}