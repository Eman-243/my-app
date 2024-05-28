import { checkAdmin } from "@/lib/info";
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

export async function PATCH(req: NextRequest) {
  try {
    if (await checkAdmin()) {
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
      const { name, price, description, img, shortDescription } = await req.json();
      const product = await prisma.product.update({
        where: {
          ProductId: parseInt(productID),
        },
        data: {
          ProductName: name,
          Price: price,
          Short_Description: shortDescription,
          Long_Description: description,
          img: img,
        },
      });
      return NextResponse.json({
        message: "Product updated",
        data: product,
      });
    } else {
      return NextResponse.json({
        message: "You are not an admin",
        data: [],
      });
    }
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


export async function DELETE(req: NextRequest) {
  try {
    if (await checkAdmin()) {
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
      await prisma.product.delete({
        where: {
          ProductId: parseInt(productID),
        },
      });
      return NextResponse.json({
        message: "Product deleted",
      });
    } else {
      return NextResponse.json(
        {
          message: "You are not an admin",
        },
        {
          status: 401,
        }
      );
    }
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