import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const productID = req.nextUrl.searchParams.get("productId");
    if (!productID) {
      return NextResponse.json(
        {
          message: "Invalid request",
        },
        {
          status: 400,
        }
      );
    }
    const product = await prisma.product.findUnique({
      where: {
        ProductId: parseInt(productID),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
