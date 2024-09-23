import { Injectable } from '@nestjs/common';
import { MetadataSchema } from '@vernaly/schema';
import { ITenantService, TenantModel } from './tenant.service.interface';
import { TenantDrizzleClientService } from '@vernaly/tenant-drizzle-client';
import { eq } from 'drizzle-orm';
import { tenants } from '@vernaly/tenant-drizzle-client';
import { NotFoundError } from '@vernaly/exceptions';
import { getEntityId } from '@vernaly/utils';

@Injectable()
export class TenantService implements ITenantService {
  constructor(
    private readonly tenantDrizzleClientService: TenantDrizzleClientService
  ) {}

  async insert(props: {
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
    const tenantId = getEntityId();

    await this.tenantDrizzleClientService.db.insert(tenants).values({
      tenantId,
      name: props.name,
      label: props.label,
    });
    // TODO create tenant-history
    // TODO create tenant owner account

    return {
      tenantId,
    };
  }

  async findOne(tenantName: string): Promise<TenantModel> {
    const tenant =
      await this.tenantDrizzleClientService.db.query.tenants.findFirst({
        where: eq(tenants.name, tenantName),
      });

    if (!tenant) {
      throw new NotFoundError('Not found tenant: {{tenantName}}', {
        tenantName,
      });
    }

    return {
      ...tenant,
      theme: {},
      metadata: tenant.metadata as MetadataSchema,
    };
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
