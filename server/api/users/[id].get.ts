import { directusUsers } from "../../db/schema"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id")

  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Missing user ID",
    })
  }

  try {
    const user = await useDrizzle()
      .select()
      .from(directusUsers)
      .where(eq(directusUsers.id, id))

    if (!user[0]) {
      throw createError({
        statusCode: 404,
        message: `User with ID ${id} not found`,
      })
    }

    return user[0]
  } catch (error) {
    if (error && error.statusCode === 404) {
      throw error
    }

    console.error("Error fetching user:", error)

    // Check if it's a database connection error
    if (error.code === "ECONNREFUSED") {
      throw createError({
        statusCode: 503,
        message: "Database connection failed. Please try again later.",
        cause: error,
      })
    }

    throw createError({
      statusCode: 500,
      message: "An error occurred while fetching the user",
      cause: error,
    })
  }
})
