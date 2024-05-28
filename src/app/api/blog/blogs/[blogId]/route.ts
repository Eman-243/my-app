import { checkAdmin } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const blogId = req.nextUrl.pathname.split("/")[4];
        if (!blogId) {
        return NextResponse.json(
            {
            message: "Invalid request",
            },
            {
            status: 400,
            }
        );
        }
        const blog = await prisma.blog.findUnique({
        where: {
            BlogID: parseInt(blogId),
        },
        });
        if (!blog) {
        return NextResponse.json(
            {
            message: "Blog not found",
            },
            {
            status: 404,
            }
        );
        }
        return NextResponse.json({
        message: "Got blog",
        data: blog,
        });
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
    try {
        if (await checkAdmin()) {
        const blogId = req.nextUrl.pathname.split("/")[4];
        if (!blogId) {
            return NextResponse.json(
            {
                message: "Invalid request",
            },
            {
                status: 400,
            }
            );
        }
        const { title, content, categoryId, img } = await req.json();
        const blog = await prisma.blog.update({
            where: {
            BlogID: parseInt(blogId),
            },
            data: {
            BlogName: title,
            Content: content,
            CategoryID: categoryId,
            Img: img,
            },
        });
        return NextResponse.json({
            message: "Blog updated",
            data: blog,
        });
        } else {
        return NextResponse.json(
            {
            message: "You are not an admin",
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

export async function DELETE(req: NextRequest) {
    try {
        if (await checkAdmin()) {
        const blogId = req.nextUrl.pathname.split("/")[4];
        if (!blogId) {
            return NextResponse.json(
            {
                message: "Invalid request",
            },
            {
                status: 400,
            }
            );
        }
        await prisma.blog.delete({
            where: {
            BlogID: parseInt(blogId),
            },
        });
        return NextResponse.json({
            message: "Blog deleted",
        });
        } else {
        return NextResponse.json(
            {
            message: "You are not an admin",
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