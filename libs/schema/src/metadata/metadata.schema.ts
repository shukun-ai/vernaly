import { z } from 'zod';
import { columnSchema } from './column.schema';

export const metadataSchema = z.object({
  tables: z.record(z.string(), columnSchema),
});

export type MetadataSchema = z.infer<typeof metadataSchema>;
