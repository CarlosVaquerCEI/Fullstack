import jwt from 'jsonwebtoken';

// crear nuevo token
export const generarTokenJWT = (user) => {

    // Generar con https://generate-secret.vercel.app/32
    const secretKey = process.env.JWT_SECRET

    console.log(secretKey)

    // Definir un payload para incrustar dentro del token, incluimos el ID y el rol del usuario
    const payload = {
        userID: user._id,
        rol: user.rol
    }

    const token = jwt.sign(payload, secretKey, {expiresIn: '1h'})
    return token

}

// verificar token JWT 
export const verifyToken = (req, res, next) => {
        const header = req.header("Authorization") || ""
        const token = header.split(" ")[1]

        const secretKey = process.env.JWT_SECRET
        
        if(!token) {
            return res.status(401).json({msg: "Token no enviado, no tienes permiso"})
        }
        try {
            const payload = jwt.verify(token, secretKey)

            // obtenemos el payload y se lo enviamos al request
            req.stuff = payload
            next()
        } catch (error) {
            return res.status(403).json.json({msg: ""})
        }
}