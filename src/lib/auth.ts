import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "prisma/prisma-client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient();
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 sec from now")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(formData: FormData) {
    // Convert FormData to an object
    let data = Object.fromEntries(formData);

    // Find the user in the database
    const user = await prisma.user.findUnique({
        where: {
            UserName: data.username.toString(),
        }
    });

    // If user does not exist, handle the error
    if (!user) {
        // Handle error, e.g., user not found
        return false; // Adjust based on your error handling strategy
    }

    if (!user.Password) {
        // Handle error, e.g., user does not have a password
        return false; // Adjust based on your error handling strategy
    }

    if (!user.UserName) {
        return false;
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(data.password.toString(), user.Password);
    if (!isMatch) {
        // Handle error, e.g., incorrect password
        return false; // Adjust based on your error handling strategy
    }

    // If credentials are correct, create the session
    const expires = new Date(Date.now() + 10 * 60 * 1000); // Session expiration
    const session = await encrypt({ user, expires });

    // Save the session in cookies
    cookies().set("session", session, {
        expires,
        httpOnly: true,
    });
    cookies().set("user", user.UserName, {
        expires,
        httpOnly: true,
    });
    return true;
    // Redirect to the tickets page
}

export async function logout() {
    cookies().set("session", "", {
        expires: new Date(0),
        httpOnly: true,
    });
    cookies().set("user", "", {
        expires: new Date(0),
        httpOnly: true,
    });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) {
        return null;
    }
    return await decrypt(session);
}

export async function updateSession(req: NextRequest) {
    const session = req.cookies.get("session")?.value;

    if (!session) {
        return null;
    }

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 60 * 1000);

    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    })

}

export async function createRoles() {
    if (await prisma.role.findUnique({ where: { RoleName: "Admin" } })) {
        return;
    } else {
        await prisma.role.create({
            data: {
                RoleID: 1,
                RoleName: "Admin"
            }
        });
    }

    if (await prisma.role.findUnique({ where: { RoleName: "User" } })) {
        return;

    } else {
        await prisma.role.create({
            data: {
                RoleID: 2,
                RoleName: "User"
            }
        });
    }
} 