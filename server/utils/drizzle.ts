import { drizzle } from "drizzle-orm/postgres-js"
import { client } from "../db"
import * as schema from "../db/schema"

export { sql, eq, and, or } from "drizzle-orm"

export const tables = schema

export function useDrizzle() {
  return drizzle(client, { schema })
}

export type DirectusUser = typeof schema.directusUsers.$inferSelect
