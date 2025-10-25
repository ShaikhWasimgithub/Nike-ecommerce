"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema/users";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

//  Signup
export async function signUp(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    return { ok: false, message: "All fields are required" };
  }

  // check if user already exists
  const existing = await db.select().from(users).where(eq(users.email, email));
  if (existing.length > 0) {
    return { ok: false, message: "User already exists" };
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // insert new user
  await db.insert(users).values({
    id: crypto.randomUUID(),
    name,
    email,
    password: hashedPassword,
  });

  //  FIXED: use await cookies()
  const cookieStore = await cookies();
  cookieStore.set("user", email, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return { ok: true };
}

//  Signin
export async function signIn(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { ok: false, message: "Email and password required" };
  }

  const existing = await db.select().from(users).where(eq(users.email, email));
  if (existing.length === 0) {
    return { ok: false, message: "User not found" };
  }

  const user = existing[0];
  const valid = await bcrypt.compare(password, user.password || "");
  if (!valid) {
    return { ok: false, message: "Invalid password" };
  }

  //  FIXED: use await cookies()
  const cookieStore = await cookies();
  cookieStore.set("user", email, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return { ok: true };
}
