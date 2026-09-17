import { db } from "../config/dbConfig.js";
import { airplanes } from "../models/schema.js";
import { eq } from "drizzle-orm";

export async function createAirplane(data) {
  try {
    const [airplane] = await db.insert(airplanes).values(data).returning();
    return airplane;
  } catch (error) {
    console.error("Error in createAirplane:", error.message);
    throw error;
  }
}

export async function getAllAirplanes() {
  try {
    return await db.select().from(airplanes);
  } catch (error) {
    console.error("Error in getAllAirplanes:", error.message);
    throw error;
  }
}

export async function getAirplaneById(id) {
  try {
    const [airplane] = await db.select().from(airplanes).where(eq(airplanes.id, id));
    return airplane;
  } catch (error) {
    console.error("Error in getAirplaneById:", error.message);
    throw error;
  }
}

export async function updateAirplane(id, data) {
  try {
    const [airplane] = await db.update(airplanes).set(data).where(eq(airplanes.id, id)).returning();
    return airplane;
  } catch (error) {
    console.error("Error in updateAirplane:", error.message);
    throw error;
  }
}

export async function deleteAirplane(id) {
  try {
    const [airplane] = await db.delete(airplanes).where(eq(airplanes.id, id)).returning();
    return airplane;
  } catch (error) {
    console.error("Error in deleteAirplane:", error.message);
    throw error;
  }
}