import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET() {
    try {
if (!cookies().get("session")) {
    return NextResponse.redirect("/login");       
        }
        const roles = await prisma.role.findMany();
        prisma.$disconnect();
        return NextResponse.json(
            {
                message: "Roles fetched successfully",
                data: roles,
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
        const body = await req.json();
        const { name } = body;
        const role = await prisma.role.create({
            data: {
                RoleName: name,
            },
        });
        prisma.$disconnect();
        return NextResponse.json(
            {
                message: "Role created successfully",
                data: role,
            },
            {
                status: 201,
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