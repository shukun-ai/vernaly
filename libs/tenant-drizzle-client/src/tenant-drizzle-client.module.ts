import { Module, DynamicModule } from '@nestjs/common';
import { TenantDrizzleClientService } from './tenant-drizzle-client.service';
import {
  TENANT_DRIZZLE_CLIENT_CONFIG,
  TenantDrizzleClientConfig,
} from './provider';

@Module({})
export class TenantDrizzleClientModule {
  static load(config: TenantDrizzleClientConfig): DynamicModule {
    const configProvider = {
      provide: TENANT_DRIZZLE_CLIENT_CONFIG,
      useFactory: async (): Promise<TenantDrizzleClientConfig> => {
        return config;
      },
    };

    return {
      module: TenantDrizzleClientModule,
      providers: [configProvider, TenantDrizzleClientService],
      exports: [TenantDrizzleClientService],
    };
  }
}
