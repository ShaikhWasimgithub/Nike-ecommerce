CREATE TABLE "guests" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_token" text NOT NULL,
	"expires_at" timestamp,
	CONSTRAINT "guests_session_token_unique" UNIQUE("session_token")
);
