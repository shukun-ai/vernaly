import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { createDbPool } from './db';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { resolve } from 'node:path';
import {
  TENANT_DRIZZLE_CLIENT_CONFIG,
  TenantDrizzleClientConfig,
} from './provider';

@Injectable()
export class TenantDrizzleClientService implements OnModuleInit {
  public db!: ReturnType<typeof createDbPool>['db'];

  constructor(
    @Inject(TENANT_DRIZZLE_CLIENT_CONFIG)
    private readonly tenantDrizzleClientConfig: TenantDrizzleClientConfig
  ) {}

  async onModuleInit() {
    const { pool, db } = createDbPool(this.tenantDrizzleClientConfig);

    await pool.connect();
    this.db = db;
    await migrate(db, {
      migrationsFolder: resolve(
        process.cwd(),
        './libs/tenant-drizzle-client/migrations'
      ),
    });
  }
}
