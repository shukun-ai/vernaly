import { Injectable } from '@nestjs/common';
import { MetadataSchema } from '@vernaly/schema';
import { ITenantService } from './tenant.service.interface';
import { TenantDrizzleClientService } from '@vernaly/tenant-drizzle-client';

@Injectable()
export class TenantService implements ITenantService {
  constructor(
    private readonly tenantDrizzleClientService: TenantDrizzleClientService
  ) {}

  async create(props: {
    name: string;
    label: string;
    db: {
      uri: string;
      prefix: string;
    };
    owner: {
      username: string;
      password: string;
    };
  }): Promise<{ tenantId: string }> {
    return { tenantId: 'xx' };
  }

  async get(tenantName: string): Promise<{
    tenantId: string;
    name: string;
    label: string;
    lightLogo: string | null;
    darkLogo: string | null;
    mainColor: string | null;
    metadata: MetadataSchema;
  }> {
    const tenant =
      await this.tenantDrizzleClientService.db.query.tenants.findFirst();
    console.log('tenant2', tenant);
    return tenant as any;
  }

  async update(
    tenantName: string,
    props: {
      label: string;
      lightLogo?: string;
      darkLogo?: string;
      mainColor?: string;
    }
  ): Promise<null> {
    return null;
  }

  async updateMetadata(
    tenantName: string,
    metadata: MetadataSchema
  ): Promise<null> {
    return null;
  }

  async destroy(tenantName: string): Promise<null> {
    return null;
  }
}
