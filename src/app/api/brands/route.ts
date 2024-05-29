import { checkAdmin } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET() {
    try {
        const brands = await prisma.product_brand.findMany().finally(() => {
            prisma.$disconnect();
        })

        return NextResponse.json(
            {
                message: "Brands fetched successfully",
                data: brands,
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