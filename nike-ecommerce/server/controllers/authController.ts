import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../../src/lib/db";
import { users } from "../../src/lib/schema/users";
import { eq } from "drizzle-orm";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey"; //

//  REGISTER USER
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    //  Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //  Check if user already exists
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (existing.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Insert user in DB
    const newUser = {
      id: crypto.randomUUID(),
      name,
      email,
      password: hashedPassword,
    };

    await db.insert(users).values(newUser);

    //  Generate token after registration
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, name: newUser.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "User registered successfully ",
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  LOGIN USER
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //  Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    //  Find user by email
    const found = await db.select().from(users).where(eq(users.email, email));

    if (found.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = found[0];

    //  Compare password
    const isValid = await bcrypt.compare(password, user.password || "");
    if (!isValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //  Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log(" JWT token created:", token);
    res.status(200).json({
      message: "Login successful ",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  VERIFY TOKEN (Middleware)
export const verifyToken = (req: any, res: Response, next: Function) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: "Token missing " });
  }

  jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
    if (err)
      return res.status(403).json({ message: "Invalid or expired token " });

    req.user = decoded;
    next();
  });
};
