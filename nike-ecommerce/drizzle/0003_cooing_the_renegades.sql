CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"image" varchar(1024) NOT NULL,
	"category" varchar(50) NOT NULL,
	"tag" varchar(100),
	"description" text DEFAULT '',
	"colors" integer DEFAULT 1,
	"created_at" timestamp DEFAULT now()
);
