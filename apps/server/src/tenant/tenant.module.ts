import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantDrizzleClientModule } from '@vernaly/tenant-drizzle-client';
import { env } from '../environments';
import { TenantController } from './tenant.controller';

@Module({
  imports: [
    TenantDrizzleClientModule.load({
      host: env.TENANT_DB_HOST,
      port: env.TENANT_DB_PORT,
      user: env.TENANT_DB_USER,
      password: env.TENANT_DB_PASSWORD,
      database: env.TENANT_DB_DATABASE,
      schema: env.TENANT_DB_SCHEMA,
    }),
  ],
  controllers: [TenantController],
  providers: [TenantService],
})
export class TenantModule {}
