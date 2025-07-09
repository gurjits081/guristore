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
  } finally {
    await prisma.$disconnect();
  }
}
