import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  uuid,
  json,
  boolean,
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const timeStamps = {
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
}
