import { checkAdmin } from "@/lib/info";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    if (await checkAdmin) {
        const roles = await prisma.role.findMany();
        return NextResponse.json({
            roles: roles,
        }, {
            status: 200,
        });
    } else {
        return NextResponse.json({
            message: "You are not an admin",
        }, {
            status: 403,
        });
    }
}

export async function POST(req: NextRequest) {
    if (await checkAdmin) {
        const { name } = await req.json();
        const role = await prisma.role.create({
            data: {
                RoleName: name,
            },
        });
        return NextResponse.json({
            role: role,
        }, {
            status: 201,
        });
    } else {
        return NextResponse.json({
            message: "You are not an admin",
        }, {
            status: 403,
        });
    }
}