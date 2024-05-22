import { login } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
import { compareSync } from "bcrypt";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: {
      Email: email,
    },
  });

  if (!user) {
    return NextResponse.json({
      status: 404,
      message: "User not found",
    });
  }

  if (user.Password && !compareSync(password, user.Password)) {
    return NextResponse.json({
      status: 401,
      message: "Invalid password",
    });
  }

  prisma.$disconnect();

  const formData = new FormData();
  if (!user.UserName || !user.Email) {
    return NextResponse.json({
      status: 400,
      message: "Invalid user data",
    });
  }
  formData.append("username", user.UserName);
  formData.append("email", user.Email);

  if ((await login(formData)) == false) {
    return NextResponse.json({
      status: 500,
      message: "Login failed",
    });
  }

  NextResponse.json({
    status: 200,
    message: "Login successful",
  });
}
