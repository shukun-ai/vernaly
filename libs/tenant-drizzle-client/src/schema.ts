import {
  pgTable,
  timestamp,
  text,
  uniqueIndex,
  uuid,
  jsonb,
} from 'drizzle-orm/pg-core';

export const tenants = pgTable(
  'tenants',
  {
    tenantId: uuid('tenantId').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    label: text('label').notNull(),
    dbUri: text('dbUri'),
    lightLogo: text('lightLogo'),
    darkLogo: text('darkLogo'),
    mainColor: text('mainColor'),
    metadata: jsonb('metadata').notNull().default({}),
    createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updatedAt', {
      precision: 3,
      mode: 'string',
    })
      .notNull()
      .defaultNow(),
  },
  (table) => {
    return {
      nameKey: uniqueIndex().on(table.name),
    };
  }
);
