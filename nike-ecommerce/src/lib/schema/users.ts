// src/lib/db/schema/users.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // better-auth generates uuid string
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password"), // nullable for social accounts
  createdAt: timestamp("created_at").defaultNow(),
});
