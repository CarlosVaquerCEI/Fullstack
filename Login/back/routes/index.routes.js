import { Router } from "express"
import { loginUser, registerUser } from "../controllers/auth.controllers.js"
import { verifyToken } from "../helpers/utils.js"

const router = Router()

// Rutas de Login
router.post("/auth/login", loginUser)
router.post("/auth/register", registerUser)


// Rutas de mi APP

router.get("/panel-de-control", verifyToken, (req, res) =>{
    res.json({msg: "Entraste en una seccion privada"})
})

export default router