import { checkAdmin, checkAuthnticated } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { product, PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  if (await checkAdmin()) {
    const orders = await prisma.order.findMany();
    if (!orders) {
      return NextResponse.json({
        message: "No orders found",
        data: [],
      });
    }
    return NextResponse.json({
      message: "Got all orders",
      data: orders,
    });
  } else {
    return NextResponse.json({
      message: "You are not an admin",
      data: [],
    });
  }
}

export async function POST(req: NextRequest) {
  if (await checkAuthnticated()) {
    const userId = req.cookies.get("userID")?.value;
    if (!userId) {
      return NextResponse.json({
        message: "You are not authenticated",
        data: [],
      });
    }
    const userID = parseInt(userId);
    const { orderProducts } = await req.json();

    const order = await prisma.order.create({
      data: {
        UserID: userID,
        OrderDate: new Date(),
      },
    });
    let totalPrice = 0;
    for (let product of orderProducts) {
      await prisma.order_product.create({
        data: {
          OrderId: order.OrderId,
          ProductId: product.ProductId,
          Quantity: product.Quantity,
        },
      });

      const productData = await prisma.product.findUnique({
        where: {
          ProductId: product.ProductId,
        },
      });
      if (productData?.Price) {
        totalPrice += productData.Price * product.Quantity;
      } else {
        return NextResponse.json({
          message: "Product not found",
          data: [],
        });
      }
    }

    return NextResponse.json({
      message: "Order created",
      data: order,
    });
  }
  return NextResponse.json({
    message: "You are not authenticated",
    data: [],
  });
}
