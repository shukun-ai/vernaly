import { z } from 'zod';
import { columnSchema } from './column.schema';

export const tableSchema = z.object({
  name: z.string(),
  label: z.string(),
  description: z.string().optional(),
  columns: z.record(z.string(), columnSchema),
});

export type TableSchema = z.infer<typeof tableSchema>;
