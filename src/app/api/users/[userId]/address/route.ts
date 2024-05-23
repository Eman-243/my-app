import { Role } from "@/lib/info";
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

        return NextResponse.json(
            {
                message: "Address fetched successfully",
                data: address,
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
        const roleId = cookies().get("role")?.value;
        if (roleId) {
            if (parseInt(roleId) == Role.Admin) {
                const userId = req.nextUrl.pathname.split("/")[2];
                const body = await req.json();
                const { address, area, block, road } = body;

                const newAddress = await prisma.useraddress.create({
                    data: {
                        UserID: parseInt(userId),
                        Address: address,
                        Area: area,
                        Block: block,
                        Road: road,
                    },
                });
            } else if (parseInt(roleId) == Role.User) {
                const userId = cookies().get("userId")?.value;
                if (userId) {
                    const body = await req.json();
                    const { address, area, block, road } = body;

                    const newAddress = await prisma.useraddress.create({
                        data: {
                            UserID: parseInt(userId),
                            Address: address,
                            Area: area,
                            Block: block,
                            Road: road,
                        },
                    });
                } else {
                    return NextResponse.json(
                        {
                            message: "Unauthorized",
                        },
                        {
                            status: 401,
                        }
                    );
                }
            } else {
                return NextResponse.json(
                    {
                        message: "Unauthorized",
                    },
                    {
                        status: 401,
                    }
                );
            }
        } else {
            return NextResponse.json(
                {
                    message: "Unauthorized",
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
