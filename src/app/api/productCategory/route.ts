import { checkAdmin } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.product_category.findMany().finally(() => {
      prisma.$disconnect();
    });

    return NextResponse.json(
      {
        message: "Categories fetched successfully",
        data: categories,
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
    if (await checkAdmin()) {
      const body = await req.json();
      const { name, parentid } = body;
      if (!name) {
        return NextResponse.json(
          { message: "Please provide required fields" },
          { status: 400 }
        );
      }

      const category = await prisma.product_category
        .create({
          data: {
            CategoryName: name,
            parentId: parentid || null,
          },
        })
        .finally(() => {
          prisma.$disconnect();
        });

      return NextResponse.json(
        {
          message: "Category created successfully",
          data: category,
        },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json({
        message: "You are not authorized to access this route",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred",
      error: error,
    });
  }
}
