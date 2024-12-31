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

// Example user table - modify according to your needs
export const directusUsers = pgTable("directus_users", {
  id: uuid("id").primaryKey().notNull(),
  firstName: varchar("first_name", { length: 50 }),
  lastName: varchar("last_name", { length: 50 }),
  email: varchar("email", { length: 128 }),
  password: varchar("password", { length: 255 }),
  location: varchar("location", { length: 255 }),
  title: varchar("title", { length: 50 }),
  description: text("description"),
  tags: json("tags"),
  avatar: uuid("avatar"),
  language: varchar("language", { length: 255 }).default(
    sql`NULL::character varying`
  ),
  tfaSecret: varchar("tfa_secret", { length: 255 }),
  status: varchar("status", { length: 16 })
    .default(sql`'active'::character varying`)
    .notNull(),
  role: uuid("role"),
  token: varchar("token", { length: 255 }),
  lastAccess: timestamp("last_access", { withTimezone: true, mode: "string" }),
  lastPage: varchar("last_page", { length: 255 }),
  provider: varchar("provider", { length: 128 })
    .default(sql`'default'::character varying`)
    .notNull(),
  externalIdentifier: varchar("external_identifier", { length: 255 }),
  authData: json("auth_data"),
  emailNotifications: boolean("email_notifications").default(sql`true`),
  appearance: varchar("appearance", { length: 255 }),
  themeDark: varchar("theme_dark", { length: 255 }),
  themeLight: varchar("theme_light", { length: 255 }),
  themeLightOverrides: json("theme_light_overrides"),
  themeDarkOverrides: json("theme_dark_overrides"),
})
