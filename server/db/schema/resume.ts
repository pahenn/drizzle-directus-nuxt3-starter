import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  uuid,
  json,
  boolean,
  integer,
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

import { timeStamps } from "./fieldGroups"
import * as profile from "./profile"

export const resume = pgTable("resume", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  profile: uuid("profile").references(() => profile.profile.id),
  title: varchar("title", { length: 255 }),
  description: text("description"),
})

export const resumeOverview = pgTable("resumeOverview", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  resume: uuid("resume").references(() => resume.id),
  about: text("about"),
})

export const resumeProjects = pgTable("resumeProjects", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  resume: uuid("resume").references(() => resume.id),
  project: uuid("project").references(() => profile.projects.id),
  sort: integer("sort"),
})

export const resumeTechnologies = pgTable("resumeTechnologies", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  resume: uuid("resume").references(() => resume.id),
  technology: uuid("technology").references(() => profile.technologies.id),
  sort: integer("sort"),
})

export const resumeEmploymentHistory = pgTable("resumeEmploymentHistory", {
  id: uuid("id").primaryKey().notNull(),
  ...timeStamps,
  resume: uuid("resume").references(() => resume.id),
  employmentHistory: uuid("employmentHistory").references(
    () => profile.employmentHistory.id
  ),
  sort: integer("sort"),
})
