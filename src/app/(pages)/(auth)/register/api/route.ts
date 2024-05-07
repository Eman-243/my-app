import { login } from "@/lib/auth"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClient, user } from "prisma/prisma-client";
import { genSaltSync, hashSync } from "bcrypt";
const prisma = new PrismaClient();


export async function POST(req: NextRequest) {
    const body = await req.json();
    const {userName, pass} = body;

    const salt = genSaltSync(10);
    const hash = hashSync(pass, salt);

    if(!userName || !pass) {
        return NextResponse.json("Please provide username and password");
    }

    if(await prisma.user.findUnique({where: {UserName: userName}})) {
        return NextResponse.json("Username already exists");
    }

    if (!userName) {
        return NextResponse.json("Please provide a username");
    }

    if (!pass) {
        return NextResponse.json("Please provide a password");
    }

    await prisma.user.create({
        data:{
            UserName: userName,
            Password: hash,
            RoleID: 1
        }
    }).catch((error)=> {
       return NextResponse.json("Error adding new user");
    });

}