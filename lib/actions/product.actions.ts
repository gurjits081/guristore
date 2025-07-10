"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get latest products
export async function getLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMIT,
      orderBy: { createdAt: "desc" },
    });

    return convertToPlainObject(data);
  } catch (error) {
    console.log("Error fetching latest products:", error);
    throw new Error("Failed to fetch latest products");
  }
}


// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  try {
    if (!slug) throw new Error("Slug is required");

    const data = await prisma.product.findFirst({
      where: { slug },
    });

    return data ? convertToPlainObject(data) : null;
  } catch (error: any) {
    console.error("Error fetching product by slug:", error.message);
    throw new Error("Failed to fetch product by slug");
  }
}
