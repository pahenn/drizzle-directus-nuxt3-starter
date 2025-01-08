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
import { timeStamps } from "./fieldGroups"

import { user } from "./users"

export const profile = pgTable("profile", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  user: uuid("user").references(() => user.id),
  x: varchar("x", { length: 255 }),
  blueSky: varchar("blue_sky", { length: 255 }),
  linkedin: varchar("linked_in", { length: 255 }),
  github: varchar("github", { length: 255 }),
})

export const overviewContentBlocks = pgTable("aboutContentBlocks", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const insertOverviewContentBlock = createInsertSchema(
  overviewContentBlocks
)
export const selectOverviewContentBlock = createSelectSchema(
  overviewContentBlocks
)

export const technologies = pgTable("technologies", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  name: varchar("name", { length: 255 }),
  description: text("description"),
})

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  title: varchar("title", { length: 255 }),
  description: text("description"),
})

export const projectDetails = pgTable("projectDetails", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
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
  profile: uuid("profile").references(() => profile.id),
  name: varchar("name", { length: 255 }),
  description: text("description"),
})

export const employmentHistory = pgTable("employmentHistory", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
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

export const education = pgTable("education", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const publications = pgTable("publications", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})

export const certifications = pgTable("certifications", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.id),
  title: varchar("title", { length: 255 }),
  content: text("content"),
})
