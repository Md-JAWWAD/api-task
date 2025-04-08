import express from "express";
const router = express.Router();
import {
  createProducts,
  deleteProducts,
  getProducts,
  updateProducts,
  getSearchProducts,
} from "../Controllers/Controller.js";

router.get("/", getProducts);
router.get("/:id", getSearchProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
