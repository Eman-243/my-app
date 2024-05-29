import { checkAdmin } from "@/lib/info";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();
export async function GET() {
  try {
    if (await checkAdmin()) {
      const users = await prisma.user.findMany();
    prisma.$disconnect();
    return NextResponse.json(
      {
        message: "Users fetched successfully",
        data: users,
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;
    const user = await prisma.user.create({
      data: {
        UserName: name,
        Email: email,
        Password: password,
        RoleID: role,
      },
    });
    prisma.$disconnect();
    return NextResponse.json(
      {
        message: "User created successfully",
        data: user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    
  }
}
