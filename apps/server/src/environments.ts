import { z } from 'zod';

const envSchema = z.object({
  TENANT_DB_HOST: z.string(),
  TENANT_DB_PORT: z.string().transform((value) => parseInt(value)),
  TENANT_DB_USER: z.string(),
  TENANT_DB_PASSWORD: z.string(),
  TENANT_DB_DATABASE: z.string(),
  TENANT_DB_SCHEMA: z.string().optional().default('public'),
});

export const env = envSchema.parse(process.env);
