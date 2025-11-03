import { Request, Response } from "express";
import { db } from "../../src/lib/db/index";
import { products } from "../../src/lib/schema/product";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await db.select().from(products);
    console.log(" Products fetched successfully:", allProducts.length);
    res.status(200).json(allProducts);
  } catch (err) {
    console.error(" Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
