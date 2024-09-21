import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { tenants } from './schema';
import { TenantDrizzleClientConfig } from './provider';

export const createDbPool = (config: TenantDrizzleClientConfig) => {
  const pool = new Pool({
    user: config.user,
    database: config.database,
    password: config.password,
    port: config.port,
    host: config.host,
  });

  const db = drizzle(pool, {
    schema: {
      tenants,
    },
  });

  return {
    pool,
    db,
  };
};
