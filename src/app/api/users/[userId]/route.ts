import { checkAdmin, checkUser } from "@/lib/info";
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

export async function DELETE(req: NextRequest, { params }: { params: {userId: string} }) {

    const { userId } = params;

    if (!userId) {
        return NextResponse.json(
            {
                message: "Please provide required fields",
            },
            {
                status: 400,
            }
        );
    }
    try {      
        
        const catId = parseInt(userId, 10);
        if (isNaN(catId)) {
            return NextResponse.json(
                {
                    message: "Invalid user id",
                },
                {
                    status: 400,
                }
            );
        }
        
        if (await checkAdmin()) {
            await prisma.user.delete({
                where: {
                    UserID: catId,
                },
            }).finally(() => {
                prisma.$disconnect();
            } );
            return NextResponse.json(
                {
                    message: "User deleted successfully",
                    data: catId,
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