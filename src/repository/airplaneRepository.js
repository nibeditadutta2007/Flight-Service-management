import { db } from "../config/dbConfig.js";
import { airplanes } from "../models/schema.js";
import { eq } from "drizzle-orm";

export async function createAirplane(data) {
  const [airplane] = await db.insert(airplanes).values(data).returning();
  return airplane;
}

export async function getAllAirplanes() {
  return await db.select().from(airplanes);
}

export async function getAirplaneById(id) {
  const [airplane] = await db.select().from(airplanes).where(eq(airplanes.id, id));
  return airplane;
}

export async function updateAirplane(id, data) {
  const [airplane] = await db.update(airplanes).set(data).where(eq(airplanes.id, id)).returning();
  return airplane;
}

export async function deleteAirplane(id) {
  const [airplane] = await db.delete(airplanes).where(eq(airplanes.id, id)).returning();
  return airplane;
}