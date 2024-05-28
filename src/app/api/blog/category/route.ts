import { checkAdmin } from "@/lib/info";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const blogs = await prisma.blog.findMany();
  if (!blogs) {
    return NextResponse.json({
      message: "No blogs found",
      data: [],
    });
  }
  return NextResponse.json({
    message: "Got all blogs",
    data: blogs,
  });
}

export async function POST(req: NextRequest) {
  if (await checkAdmin()) {
    const { title } = await req.json();
    const category = await prisma.blog_category
      .create({
        data: {
          CategoryName: title,
        },
      })
      .then((category) => {
        return NextResponse.json({
          message: "Category created",
          data: category,
        });
      })
      .catch((error) => {
        return NextResponse.json({
          message: "Error creating category",
          error: error,
        });
      });
  }
  return NextResponse.json({
    message: "You are not an admin",
    data: [],
  });
}
