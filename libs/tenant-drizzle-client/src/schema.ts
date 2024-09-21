import {
  pgTable,
  timestamp,
  text,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core';

export const tenants = pgTable(
  'tenants',
  {
    tenantId: uuid('tenantId').primaryKey().defaultRandom(),
    createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp('updatedAt', {
      precision: 3,
      mode: 'string',
    }).notNull(),
    name: text('name').notNull(),
    dbUri: text('dbUri'),
  },
  (table) => {
    return {
      nameKey: uniqueIndex().on(table.name),
    };
  }
);
