import { login } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; // Use bcrypt instead of bcryptjs
const prisma = new PrismaClient();


export async function POST(req: NextRequest){
  try {
    const { email, password } = await req.json();

    await prisma.user.findUnique({
      where: {
        Email: email,
      },
    }).then(async user => {
      if (!user) {
        return NextResponse.json(
          {
            message: "User not found",
          },
          {
            status: 404,
          }
        );
      }

      if (!user.Password) {
        return NextResponse.json(
          {
            message: "User password not found",
          },
          {
            status: 500,
          }
        );
      }

      const isMatch = await bcrypt.compare(password, user.Password);
      
      if (!isMatch) {
        return NextResponse.json(
          {
            message: "Password does not match",
          },
          {
            status: 500,
          }
        );
      }

      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", password);

      const loginResult = await login(formData);
      
      if (loginResult === false) {
        return NextResponse.json(
          {
            message: "Login failed",
          },
          {
            status: 500,
          }
        );
      }

    }).catch(error => {
      return NextResponse.json(
        {
          message: "An error occurred",
          error: error,
        },
        {
          status: 500,
        }
      );
    
    }).finally(() => {
      prisma.$disconnect();
    });
    return NextResponse.json(
      {
        message: "Login successful",
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