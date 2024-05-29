import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("Fetching categories...");
    const categories = await prisma.product_category.findMany({
      include: {
        children: true
      }
    });
    await prisma.$disconnect();

    console.log("Categories fetched successfully:", categories);

    // Prepare the response data by organizing categories and subcategories
    const responseData = categories.map(category => ({
      CategoryId: category.CategoryId,
      CategoryName: category.CategoryName,
      parentId: category.parentId,
      subcategories: category.children ? category.children.map(child => ({
        CategoryId: child.CategoryId,
        CategoryName: child.CategoryName,
        parentId: child.parentId
      })) : []
    }));

    return NextResponse.json(
      {
        message: "Categories fetched successfully",
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/productCategory error:", error);

    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      {
        message: "An error occurred",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
