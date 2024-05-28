import { checkAdmin } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const categoryId = req.nextUrl.pathname.split("/")[4];
    if (!categoryId) {
        return NextResponse.json({
            message: "Invalid request",
        }, {
            status: 400,
        });
    }
    const category = await prisma.blog_category.findUnique({
        where: {
            CategoryID: parseInt(categoryId),
        },
    });

    const blogs = await prisma.blog.findMany({
        where: {
            CategoryID: parseInt(categoryId),
        },
    });

    if (!category) {
        return NextResponse.json({
            message: "Category not found",
        }, {
            status: 404,
        });
    }

    return NextResponse.json({
        message: "Got category",
        data: {
            category,
            blogs,
        },
    });


}

export async function PATCH(req: NextRequest) {
    if (await checkAdmin()) {
        const categoryId = req.nextUrl.pathname.split("/")[4];
        if (!categoryId) {
            return NextResponse.json({
                message: "Invalid request",
            }, {
                status: 400,
            });
        }
        const { name } = await req.json();
        const category = await prisma.blog_category.update({
            where: {
                CategoryID: parseInt(categoryId),
            },
            data: {
                CategoryName: name,
            },
        });
        return NextResponse.json({
            message: "Category updated",
            data: category,
        });
    } else {
        return NextResponse.json({
            message: "You are not an admin",
            data: [],
        });
    }
}

export async function DELETE(req: NextRequest) {
    if (await checkAdmin()) {
        const categoryId = req.nextUrl.pathname.split("/")[4];
        if (!categoryId) {
            return NextResponse.json({
                message: "Invalid request",
            }, {
                status: 400,
            });
        }
        const category = await prisma.blog_category.delete({
            where: {
                CategoryID: parseInt(categoryId),
            },
        });
        return NextResponse.json({
            message: "Category deleted",
            data: category,
        });
    } else {
        return NextResponse.json({
            message: "You are not an admin",
            data: [],
        });
    }
}