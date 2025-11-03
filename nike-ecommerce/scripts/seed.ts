import "dotenv/config";

import { db } from "@/lib/db";
import { products } from "@/lib/schema/product";
import { eq } from "drizzle-orm";

async function seed() {
  const existing = await db.select().from(products);
  if (existing.length > 0) {
    console.log(" Products already exist in database!");
    return;
  }

  await db.insert(products).values([
    {
      name: "Nike Air Max 270",
      description: "Lightweight running shoes with superior cushioning.",
      price: "8999",
      category: "Shoes",
      image: "/shoes/airmax270.png",
    },
    {
      name: "Nike Air Force 1",
      description: "Classic white sneakers with premium leather finish.",
      price: "7999",
      category: "Shoes",
      image: "/shoes/airforce1.png",
    },
    {
      name: "Nike ZoomX Invincible",
      description: "High-performance running shoes with ZoomX foam.",
      price: "10999",
      category: "Running",
      image: "/shoes/zoomx.png",
    },
  ]);

  console.log("🌱 Product data seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
