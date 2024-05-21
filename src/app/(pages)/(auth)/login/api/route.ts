import { login } from "@/lib/auth"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from "prisma/prisma-client";
import { compareSync } from "bcrypt";
const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    const body = await req.json();
    const {userNameNew, pass} = body;

    const user = await prisma.user.findUnique({
        where: {
            UserName: userNameNew
        }
    }).then(async (user) => {
        if (!user) {
            return NextResponse.json({
                status: 401,
                body: "User not found"
            })
        }

        if (!user.Password) {
            return NextResponse.json({
                status: 401,
                body: "User does not have a password"
            })
        }

        const isMatch = await compareSync(pass, user.Password);
        if (!isMatch) {
            return NextResponse.json({
                status: 401,
                body: "Incorrect password"
            })
        }
    })

    prisma.$disconnect();


    const formData = new FormData();

    formData.append("username", userNameNew);
    formData.append("password", pass);

    if (await login(formData) == false) {
        return NextResponse.json({
            status: 401,
            body: "Incorrect username or password"
        })
    }
    NextResponse.json({
        message: "Logged in successfully"
    }, {
        status: 201
    })
}