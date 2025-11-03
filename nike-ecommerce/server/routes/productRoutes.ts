import express from "express";
import { getAllProducts } from "../controllers/productController";

const router = express.Router();

// GET /api/products
router.get("/", getAllProducts);

export default router;
