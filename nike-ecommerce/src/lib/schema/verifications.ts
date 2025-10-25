// src/lib/db/schema/verifications.ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const verifications = pgTable("verifications", {
  id: serial("id").primaryKey(),
  identifier: text("identifier").notNull(),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at"),
});
