import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const productID = req.nextUrl.pathname.split("/")[3];
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
