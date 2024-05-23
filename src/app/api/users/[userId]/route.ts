import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const userId = req.nextUrl.pathname.split("/")[3];

        if (!userId) {
            return NextResponse.json(
                {
                    message: "Invalid request",
                },
                {
                    status: 400,
                }
            );
        }

        const user = await prisma.user.findUnique({
            where: {
                UserID: parseInt(userId),
            },
        });

        prisma.$disconnect();

        return NextResponse.json(
            {
                message: "User fetched successfully",
                data: user,
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