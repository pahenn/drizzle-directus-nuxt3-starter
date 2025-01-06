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

export const aboutContentBlocks = pgTable("aboutContentBlocks", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const insertAboutContentBlock = createInsertSchema(aboutContentBlocks)
export const selectAboutContentBlock = createSelectSchema(aboutContentBlocks)

export const technologies = pgTable("technologies", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  name: varchar("name", { length: 255 }),
  description: text("description"),
})

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const projectDetails = pgTable("projectDetails", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  project: uuid("project").references(() => projects.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const projectTechnologies = pgTable("projectTechnologies", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  project: uuid("project").references(() => projects.id),
  technology: uuid("technology").references(() => technologies.id),
})

export const employmentEntities = pgTable("employmentEntities", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  name: varchar("name", { length: 255 }),
  description: text("description"),
})

export const employmentHistory = pgTable("employmentHistory", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => directusUsers.id),
  entity: uuid("entity").references(() => employmentEntities.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const employmentHistoryPositions = pgTable(
  "employmentHistoryPositions",
  {
    id: uuid("id").primaryKey().notNull(),
    ...timeStamps,
    history: uuid("history").references(() => employmentHistory.id),
    position: varchar("position", { length: 255 }),
    description: text("description"),
  }
)

export const employmentHistoryTechnologies = pgTable(
  "employmentHistoryTechnologies",
  {
    id: uuid("id").primaryKey().notNull(),
    ...timeStamps,
    history: uuid("history").references(() => employmentHistory.id),
    technology: uuid("technology").references(() => technologies.id),
  }
)
