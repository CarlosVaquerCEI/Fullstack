import { connection } from "../index.js"


export const loginUsers = async (req,res) => {
    const [results, fields] = await connection.query(
        `SELECT * FROM users WHERE users.deleted_at IS NULL`
    )
    
        responseAPI.data=results
        responseAPI.msg="Obtener Libros"
        responseAPI.status="ok"
        res.status(200).send(responseAPI)
    }


export const newUser = () => {

    const {usuario, contrasenya} = req.body

    const sqlQuery = `INSERT INTO users 
    (usuario, contraseña) 
    VALUES 
    ('${usuario}, ${contrasenya}');`;
}
