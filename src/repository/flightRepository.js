import { db } from "../config/dbConfig.js";
import { flights } from "../models/schema.js";
import { eq } from "drizzle-orm";

export async function createFlight(data) {
  try {
    const [flight] = await db.insert(flights).values(data).returning();
    return flight;
  } catch (error) {
    console.error("Error in createFlight:", error.message);
    throw error;
  }
}

export async function getAllFlights() {
  try {
    return await db.select().from(flights);
  } catch (error) {
    console.error("Error in getAllFlights:", error.message);
    throw error;
  }
}

export async function getFlightById(id) {
  try {
    const [flight] = await db.select().from(flights).where(eq(flights.id, id));
    return flight;
  } catch (error) {
    console.error("Error in getFlightById:", error.message);
    throw error;
  }
}

export async function updateFlight(id, data) {
  try {
    const [flight] = await db.update(flights).set(data).where(eq(flights.id, id)).returning();
    return flight;
  } catch (error) {
    console.error("Error in updateFlight:", error.message);
    throw error;
  }
}

export async function deleteFlight(id) {
  try {
    const [flight] = await db.delete(flights).where(eq(flights.id, id)).returning();
    return flight;
  } catch (error) {
    console.error("Error in deleteFlight:", error.message);
    throw error;
  }
}