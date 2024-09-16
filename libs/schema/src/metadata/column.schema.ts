import { z } from 'zod';

export const columnOptionsSchema = z.array(
  z.object({
    key: z.string(),
    label: z.string(),
    color: z.string().optional(),
  })
);

export const columnStringSchema = z.object({
  columnType: z.literal('String'),
  maxLength: z.number().optional().default(1000),
});

export const columnLargeTextSchema = z.object({
  columnType: z.literal('Text'),
});

export const columnSingleSelectSchema = z.object({
  columnType: z.literal('SingleSelect'),
  options: columnOptionsSchema,
});

export const columnMultipleSelectSchema = z.object({
  columnType: z.literal('MultipleSelect'),
  options: columnOptionsSchema,
});

export const columnBooleanSchema = z.object({
  columnType: z.literal('Boolean'),
});

export const columnDateTimeSchema = z.object({
  columnType: z.literal('DateTime'),
});

export const columnIntegerSchema = z.object({
  columnType: z.literal('Integer'),
});

export const columnNumberSchema = z.object({
  columnType: z.literal('Number'),
  precision: z.number(),
  scale: z.number(),
});

export const columnPasswordSchema = z.object({
  columnType: z.literal('Password'),
  passwordOptions: z.object({
    includesSpecialCharacter: z.boolean(),
    includesUppercase: z.boolean(),
    includesLowercase: z.boolean(),
    minLength: z.number().min(1),
    maxLength: z.number().max(60),
  }),
});

export const columnForeignKeySchema = z.object({
  columnType: z.literal('ForeignKey'),
  foreignKeyOptions: z.object({
    table: z.string(),
    column: z.string(),
    onDelete: z.enum([
      'CASCADE',
      'SET_NULL',
      'SET_DEFAULT',
      'RESTRICT',
      'NO_ACTION',
    ]),
    onUpdate: z.enum([
      'CASCADE',
      'SET_NULL',
      'SET_DEFAULT',
      'RESTRICT',
      'NO_ACTION',
    ]),
  }),
});

export const columnOwnerSchema = z.object({
  columnType: z.literal('Owner'),
});

export const columnAttachmentSchema = z.object({
  columnType: z.literal('Attachment'),
  attachmentOptions: z.object({
    allowedMime: z.array(z.string()),
    limitSize: z.number(),
  }),
});

// continue to add more column types here from platform

export const columnSchema = z
  .object({
    name: z.string(),
    label: z.string(),
    description: z.string().optional(),
    isRequired: z.boolean(),
    isUnique: z.boolean().optional(),
    isIndexed: z.boolean().optional(),
  })
  .and(
    z.union([
      columnStringSchema,
      columnLargeTextSchema,
      columnSingleSelectSchema,
      columnMultipleSelectSchema,
      columnBooleanSchema,
      columnDateTimeSchema,
      columnIntegerSchema,
      columnNumberSchema,
      columnPasswordSchema,
      columnForeignKeySchema,
      columnOwnerSchema,
      columnAttachmentSchema,
    ])
  );

export type ColumnSchema = z.infer<typeof columnSchema>;
