CREATE TABLE IF NOT EXISTS "tenants" (
	"tenantId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"label" text NOT NULL,
	"dbUri" text,
	"lightLogo" text,
	"darkLogo" text,
	"mainColor" text,
	"metadata" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "tenants_name_index" ON "tenants" USING btree ("name");