import { cookies } from "next/headers";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

export const serverLink = "http://localhost:3000";
// export const serverLink = 'http://localhost:3000';

export enum Role {
  Admin = 1,
  User = 2,
}

export async function checkUser(userID: number): Promise<boolean> {
  if (await checkAdmin()) {
    return true;
  } else {
    const userId = cookies().get("userId")?.value;
    if (!userId) {
      return false;
    }
    if (parseInt(userId) == userID) {
      return true;
    }
  }
  return false;
}

export async function checkAdmin(): Promise<boolean> {
  const userId = cookies().get("userId")?.value;
  if (!userId) {
    return false;
  }
  const userID = parseInt(userId);

  const user = await prisma.user.findUnique({
    where: {
      UserID: userID,
    },
  });

  const userRole = user?.RoleID;

  if (userRole) {
    if (userRole == Role.Admin) {
      return true;
    }
  }
  return false;
}

export async function checkAuthnticated(): Promise<boolean> {
  const userId = cookies().get("userId")?.value;
  if (!userId) {
    return false;
  }
  return true;
}
