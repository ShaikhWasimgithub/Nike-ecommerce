// src/app/api/auth/[...auth]/route.ts
import { auth } from "@/lib/auth";

export const GET = auth.handler;
export const POST = auth.handler;
