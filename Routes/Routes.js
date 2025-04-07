import express from "express";
const router = express.Router();
import { createProducts, deleteProducts, getProducts, updateProducts } from "../Controllers/Controller.js"

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
