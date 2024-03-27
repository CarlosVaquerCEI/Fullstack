import { Router } from "express";
import { getAllProducts } from "../controllers/products.controllers.js";


export const router = Router()

router.get("/products", getAllProducts);