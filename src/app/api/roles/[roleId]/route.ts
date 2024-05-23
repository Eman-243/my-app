import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const roleId = req.nextUrl.pathname.split("/")[3];
    console.log(roleId, "Printer");
    try {
        if (!roleId) {
            return NextResponse.json(
                {
                    message: "Invalid request",
                },
                {
                    status: 400,
                }
            );
        }
        const role = await prisma.role.findUnique({
            where: {
                RoleID: parseInt(roleId),
            },
        });
        prisma.$disconnect();
        return NextResponse.json(
            {
                message: "Role fetched successfully",
                data: role,
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