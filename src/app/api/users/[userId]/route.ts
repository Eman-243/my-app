import { checkUser } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const userId = req.nextUrl.pathname.split("/")[3];

        if (await checkUser(parseInt(userId))) {
            const user = await prisma.user.findFirst({
                where: {
                    UserID: parseInt(userId),
                },
            });

            prisma.$disconnect();
            return NextResponse.json(
                {
                    user: user,
                },
                {
                    status: 200,
                }
            );
        } else {
            return NextResponse.json(
                {
                    message: "You are not authorized to access this route",
                },
                {
                    status: 403,
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