import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { checkAdmin } from "@/lib/info";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const categories = await prisma.product_category.findMany({
        include:{
            children: true
        }
    }).finally(() => {
      prisma.$disconnect();
    });
    await prisma.$disconnect();

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
      }, {
        status: 403,
      
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred",
      error: error,
    });
  }
}
