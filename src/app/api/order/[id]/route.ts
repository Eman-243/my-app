import { checkAdmin, checkUser } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
  
    if (!id) {
      return NextResponse.json(
        {
          message: "Please provide required fields",
        },
        {
          status: 400,
        }
      );
    }
      const catId = parseInt(id, 10);
      if (isNaN(catId)) {
        return NextResponse.json(
          {
            message: "Invalid category id",
          },
          {
            status: 400,
          }
        );
      }
    const order = await prisma.order.findUnique({
        where: {
            OrderId: catId,
        }, include:{
            orderProducts: {
                include: {
                    product: true,
                }
            }
        }
    });



    if (!order) {
        return NextResponse.json({
            message: "Order not found",
        }, {
            status: 404,
        });
    }

    if (await checkUser(order.UserID)) {
        return NextResponse.json({
            message: "Got order",
            data: {
                order,
            },
        });
    } else {
        return NextResponse.json({
            message: "You are not authorized",
        }, {
            status: 401,
        });
    }
}

export async function PATCH(req: NextRequest) {
    const orderId = req.nextUrl.pathname.split("/")[3];
    if (!orderId) {
        return NextResponse.json({
            message: "Invalid request",
        }, {
            status: 400,
        });
    }

    const { status } = await req.json();

    if (await checkAdmin()) {
        const order = await prisma.order.update({
            where: {
                OrderId: parseInt(orderId),
            },
            data: {
               Status : status,
            },
        });

        return NextResponse.json({
            message: "Order updated",
            data: order,
        });
    } else {
        return NextResponse.json({
            message: "You are not authorized",
        }, {
            status: 401,
        });
    }


}