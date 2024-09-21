CREATE TABLE IF NOT EXISTS "tenants" (
	"tenantId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"name" text NOT NULL,
	"dbUri" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "tenants_name_index" ON "tenants" USING btree ("name");