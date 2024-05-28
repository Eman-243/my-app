import { checkUser, Role } from "@/lib/info";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.pathname.split("/")[2];
    const address = await prisma.useraddress.findFirst({
      where: {
        UserID: parseInt(userId),
      },
    });

    prisma.$disconnect();
    if (await checkUser(parseInt(userId))) {
      return NextResponse.json(
        {
          address: address,
        },
        {
          status: 200,
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

export async function POST(req: NextRequest) {
    try {
        const userId = req.nextUrl.pathname.split("/")[2];
        const body = await req.json();
        const { address } = body;
        if (await checkUser(parseInt(userId))) {
        const newAddress = await prisma.useraddress.create({
            data: {
            UserID: parseInt(userId),
            Address: address,
            },
        });
        prisma.$disconnect();
        return NextResponse.json(
            {
            address: newAddress,
            },
            {
            status: 200,
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

export async function PATCH(req: NextRequest){
    try {
        const userId = req.nextUrl.pathname.split("/")[2];
        const body = await req.json();
        const { address, road, block, area } = body;
        const userID = parseInt(userId);
        if (await checkUser(userID)) {
        const updatedAddress = await prisma.useraddress.update({
            where: {
            UserID: userID,
            },
            data: {
            Address: address,
            Area: area,
            Block: block,
            Road: road,
            },
        });
        prisma.$disconnect();
        return NextResponse.json(
            {
            address: updatedAddress,
            },
            {
            status: 200,
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