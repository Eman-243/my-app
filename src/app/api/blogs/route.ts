import { cookies } from 'next/headers';
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
    const body = await req.json();
    const {title, content, categoryId, date, img} = body
    const userId = cookies().get('userId')?.value;
    if (!userId) {
        return NextResponse.json({
            message: "User not logged in",
        })
    }
    const verifiedID = parseInt(userId) 
    const blog = await prisma.blog.create({
        data: {
            BlogName: title,
            CategoryID: categoryId,
            Content: content,
            Date: date,
            Img: img,
            UserID: verifiedID
        }
    }).catch((error) => {
        return NextResponse.json({
            message: "Error creating blog",
            error: error
        })
    })
    return NextResponse.json({
        message: "Blog created",
        data: blog
    })
}