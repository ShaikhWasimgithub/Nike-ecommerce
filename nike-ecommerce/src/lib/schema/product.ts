import {
  pgTable,
  serial,
  varchar,
  numeric,
  text,
  integer,
  json,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  image: varchar("image", { length: 1024 }).notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  tag: varchar("tag", { length: 100 }),
  description: text("description").default(""),
  colors: integer("colors").default(1),
  images: json("images").$type<string[]>().default([]),

  created_at: timestamp("created_at").defaultNow(),
});
