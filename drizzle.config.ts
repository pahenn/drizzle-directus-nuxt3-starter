import { defineConfig } from "drizzle-kit"

export default defineConfig({
  schema: "./server/db/schema",
  out: "./server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
})
