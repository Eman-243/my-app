import { NextResponse } from "next/server";
import { logout } from "@/lib/auth";
export function GET() {
    logout();
    return NextResponse.json({
        message: "Logout successful",
    }, {
        status: 201
    })
}