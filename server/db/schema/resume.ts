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
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

import { directusUsers } from "./users"
import { timeStamps } from "./fieldGroups"
import * as profile from "./profile"

export const resume = pgTable("resume", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  projects: uuid("projects").references(() => profile.projects.id),
  technologies: uuid("technologies").references(() => profile.technologies.id),
  employmentHistory: uuid("employmentHistory").references(
    () => profile.employmentHistory.id
  ),
})
