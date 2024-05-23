import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    prisma.$disconnect();
    return NextResponse.json(
      {
        message: "Users fetched successfully",
        data: users,
      },
      {
        status: 200,
      }
    );
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = cookies().get("user")?.value;
    if (!user) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    if (!body) {
      return NextResponse.json(
        {
          message: "Invalid request",
        },
        {
          status: 400,
        }
      );
    }

    const product = await prisma.product.create({
      data: {
        BrandId: body.BrandId,
        CategoryId: body.CategoryId,
        Short_Description: body.Short_Description,
        Long_Description: body.Long_Description,
        Price: body.Price,
        ProductName: body.ProductName,
        Show_price: body.Show_price,
        VAT: body.VAT,
        Model: body.Model,
        Discount_Amount: body.Discount_Amount,
      },
    });
    prisma.$disconnect();
    return NextResponse.json(
      {
        message: "Product created successfully",
        data: product,
      },
      {
        status: 201,
      }
    );
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
