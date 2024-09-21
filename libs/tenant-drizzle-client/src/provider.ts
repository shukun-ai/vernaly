export const TENANT_DRIZZLE_CLIENT_CONFIG = 'TENANT_DRIZZLE_CLIENT_CONFIG';

export type TenantDrizzleClientConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  schema: string;
};
