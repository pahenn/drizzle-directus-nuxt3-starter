import { checkDatabaseConnection } from "../db"

export default defineEventHandler(async () => {
  const dbConnected = await checkDatabaseConnection()

  if (!dbConnected) {
    throw createError({
      statusCode: 503,
      message: "Database connection failed",
    })
  }

  return {
    status: "healthy",
    database: "connected",
  }
})
