import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not defined in environment variables")
}

// Create postgres connection with better defaults
const client = postgres(process.env.DB_URL, {
  prepare: false,
  max: 10, // Increase connection pool size
  idle_timeout: 20, // Close idle connections after 20 seconds
  connect_timeout: 10, // Connection timeout after 10 seconds
  ssl: process.env.NODE_ENV === "production", // Enable SSL in production
})

// Create drizzle instance
export const db = drizzle(client)

// Export type helper
export type DbClient = typeof db

// Optional: Add a health check function
export async function checkDatabaseConnection() {
  try {
    await client`SELECT 1`
    return true
  } catch (error) {
    console.error("Database connection failed:", error)
    return false
  }
}
