import e from "express"
import { generarTokenJWT } from "../helpers/utils.js"

export const loginUser = async (req, res, next) => {
    try {
        const {user, pass} = req.body

        // Buscar en la DB mi usuario
        const usuario = {
            id: "ladhadlkjahdk123",
            nombre: "Carlos",
            rol: "ADMIN"
        }

        // Comparar la contraseña proporcionada con la de la DB
        // const isValid = await bcrypt.compare(pass, usuario.pass)
        // if(!isValid) {
        //     return res.status(401).json({msg: "Usuario no existe", status: "error"})
        // }

        // GENERAR LA LLAVE TOKEN

        const token = generarTokenJWT(usuario)
        console.log("token es:", token)

        // eliminar datos sensibles antes de enviar al cliente
        delete usuario.pass

        res.status(200).json({msg:"Login Correcto", jwtToken:token, user: usuario, status:"ok"})


    } catch (error) {
        next(error)
    }
}

export const registerUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}