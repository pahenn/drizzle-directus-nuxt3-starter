import { drizzle } from "drizzle-orm/postgres-js"
import { client } from "../db"
import * as schema from "../db/schema"

export { sql, eq, and, or } from "drizzle-orm"

export const tables = schema

export function useDrizzle() {
  return drizzle(client, { schema })
}

// Not sure if it makes sense to do this for every table, but this is an example
export type DirectusUser = typeof schema.directusUsers.$inferSelect
