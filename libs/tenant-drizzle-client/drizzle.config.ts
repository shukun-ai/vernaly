import { join } from 'node:path';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: join(__dirname, 'src/schema.ts'),
  out: 'libs/tenant-drizzle-client/migrations',
  dialect: 'postgresql',
  verbose: true,
  strict: true,
});
