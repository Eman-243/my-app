import { checkAdmin } from '@/lib/info';
import {NextRequest, NextResponse} from 'next/server';
import {PrismaClient} from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const blogs = await prisma.blog.findMany();
    if (!blogs) {
        return NextResponse.json({
            message: "No blogs found",
            data: []
        })
    }
    return NextResponse.json({
        message: "Got all blogs",
        data: blogs
    })
}

export async function POST(req: NextRequest) {
    if (await checkAdmin()) {
        const {title, content, categoryId, img} = await req.json();
        const blog = await prisma.blog.create({
            data: {
                BlogName: title,
                Content: content,
                CategoryID: categoryId,
                Date: new Date(),
                Img: img
            }
        })
        return NextResponse.json({
            message: "Blog created",
            data: blog
        })
    } else {
        return NextResponse.json({
            message: "You are not an admin",
            data: []
        })
    }
}