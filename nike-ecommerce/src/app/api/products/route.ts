import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { products } from "@/lib/schema/product";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const allProducts = await db
      .select()
      .from(products)
      .orderBy(desc(products.created_at));

    return NextResponse.json(allProducts);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
