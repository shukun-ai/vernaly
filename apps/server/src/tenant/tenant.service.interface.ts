import { MetadataSchema } from "@vernaly/schema";

export interface ITenantService {
    create (props: {
        name: string;
        label: string;
        db: {
            uri: string,
            prefix: string,
        },
        owner: {
            username: string,
            password: string,
        }
    }): Promise<{tenantId: string}>

    get (tenantName: string): Promise<{
        tenantId: string;
        name: string
        label: string;
        lightLogo: string | null;
        darkLogo: string | null;
        mainColor: string | null;
        metadata: MetadataSchema
    }>

    update (tenantName: string, props: {
        label: string;
        lightLogo?: string;
        darkLogo?: string;
        mainColor?: string;
    }):Promise<null>

    updateMetadata (tenantName: string, metadata: MetadataSchema): Promise<null>

    destroy (tenantName: string): Promise<null>
}