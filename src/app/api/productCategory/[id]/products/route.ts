import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string}}) {
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

    try {
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

        const products = prisma.product.findMany({
            where: {
                CategoryId: catId,
            },
        }).finally(() => {
            prisma.$disconnect();
        });
    } catch (error) {
        
    }
}