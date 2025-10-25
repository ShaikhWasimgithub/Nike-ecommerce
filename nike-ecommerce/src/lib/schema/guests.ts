// src/lib/db/schema/guests.ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  sessionToken: text("session_token").notNull().unique(),
  expiresAt: timestamp("expires_at"),
});
