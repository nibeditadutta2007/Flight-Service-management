import { db } from "../config/dbConfig.js";
import { airports } from "../models/schema.js";
import { eq } from "drizzle-orm";

export async function createAirport(data) {
  try {
    const [airport] = await db.insert(airports).values(data).returning();
    return airport;
  } catch (error) {
    console.error("Error in createAirport:", error.message);
    throw error;
  }
}

export async function getAllAirports() {
  try {
    return await db.select().from(airports);
  } catch (error) {
    console.error("Error in getAllAirports:", error.message);
    throw error;
  }
}

export async function getAirportById(id) {
  try {
    const [airport] = await db.select().from(airports).where(eq(airports.id, id));
    return airport;
  } catch (error) {
    console.error("Error in getAirportById:", error.message);
    throw error;
  }
}

export async function updateAirport(id, data) {
  try {
    const [airport] = await db.update(airports).set(data).where(eq(airports.id, id)).returning();
    return airport;
  } catch (error) {
    console.error("Error in updateAirport:", error.message);
    throw error;
  }
}

export async function deleteAirport(id) {
  try {
    const [airport] = await db.delete(airports).where(eq(airports.id, id)).returning();
    return airport;
  } catch (error) {
    console.error("Error in deleteAirport:", error.message);
    throw error;
  }
}