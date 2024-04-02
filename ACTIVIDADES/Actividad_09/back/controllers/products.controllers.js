import dataProducts from "../db/dataProducts.js"

export const getAllProducts = async (req, res) => {
    res.send(dataProducts)
}