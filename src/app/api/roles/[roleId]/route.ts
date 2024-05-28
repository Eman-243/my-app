import { checkAdmin } from "@/lib/info";
import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const roleId = req.nextUrl.pathname.split("/")[3];
    try {
        if (await checkAdmin) {
            const role = await prisma.role.findUnique({
                where: {
                    RoleID: parseInt(roleId),
                },
            });
            if (role) {
                return NextResponse.json(
                    {
                        role: role,
                    },
                    {
                        status: 200,
                    }
                );
            } else {
                return NextResponse.json(
                    {
                        message: "Role not found",
                    },
                    {
                        status: 404,
                    }
                );
            }
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

export async function PATCH(req: NextRequest) {
    const roleId = req.nextUrl.pathname.split("/")[3];
    try {
        if (await checkAdmin) {
            const { name } = await req.json();
            const role = await prisma.role.update({
                where: {
                    RoleID: parseInt(roleId),
                },
                data: {
                    RoleName: name,
                },
            });
            return NextResponse.json(
                {
                    role: role,
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