import { Router } from "express";
import {getAllLibros, createLibro, getLibroById, updateLibro, deleteLibro} from "../controllers/libros.controller.js"
import { loginUsers } from "../controllers/users.controller.js";

const router = Router()

router.get("/libros", getAllLibros);


router.post("/users", loginUsers)

// CreateReadUpdateDelete - CRUD

router.post("/libros", createLibro);        // create
router.get("/libros/:id", getLibroById);    // read
router.put("/libros/:id", updateLibro);     // update
router.delete("/libros/:id", deleteLibro);  // delete


export default router