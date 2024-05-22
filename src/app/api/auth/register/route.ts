import { PrismaClient } from "prisma/prisma-client";
import { genSaltSync, hashSync } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { Role } from "@/lib/info";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, phoneNumber } = body;

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  if (!email || !password || !phoneNumber) {
    return NextResponse.json(
      { message: "please provide required fields" },
      { status: 400 }
    );
  }

  if (await prisma.user.findUnique({ where: { Email: email } })) {
    return NextResponse.json(
      { message: "user already exists" },
      { status: 400 }
    );
  }

  await prisma.user
    .create({
      data: {
        Email: email,
        Password: hashedPassword,
        PhoneNumber: phoneNumber,
        RoleID: Role.User,
      },
    })
    .catch((err) => {
      return NextResponse.json({ message: err }, { status: 500 });
    });
  prisma.$disconnect();

  return NextResponse.json({ message: "user created" }, { status: 201 });
}
