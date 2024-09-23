import { MetadataSchema } from '@vernaly/schema';

export type TenantModel = {
  tenantId: string;
  name: string;
  label: string;
  theme: {
    lightLogo?: string;
    darkLogo?: string;
    mainColor?: string;
  };
  metadata: MetadataSchema;
};

export interface ITenantService {
  insert(props: {
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
  }): Promise<{ tenantId: string }>;

  findOne(tenantName: string): Promise<TenantModel>;

  update(
    tenantName: string,
    props: {
      label: string;
      lightLogo?: string;
      darkLogo?: string;
      mainColor?: string;
    }
  ): Promise<null>;

  updateMetadata(tenantName: string, metadata: MetadataSchema): Promise<null>;

  destroy(tenantName: string): Promise<null>;
}
