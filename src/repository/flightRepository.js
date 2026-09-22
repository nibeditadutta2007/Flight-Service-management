import { db } from "../config/dbConfig.js";
import { flights } from "../models/schema.js";
import { eq, and, gte, lte} from "drizzle-orm";

export async function createFlight(data) {
  try {
    const flight = await db.insert(flights).values(data).returning();
    return flight;
  } catch (error) {
    console.error("Error in createFlight:", error.message);
    throw error;
  }
}

export async function getAllFlights(filter = {}){
  try{
    const conditions =[];

    if(filter.airplaneId) {
      conditions.push(eq(flights.airplaneId, Number(filter.airplaneId)));
    }
    if (filter.airportId) {
      conditions.push(eq(flights.airportId, Number(filter.airportId)));
    }
    if (filter.departureAfter) {
      conditions.push(gte(flights.departureTime, new Date(filter.departureAfter)));
    }
    if (filter.departureBefore) {
      conditions.push(lte(flights.departureTime, new Date(filter.departureBefore)));
    }

    if (conditions.length > 0) {
      return await db.select().from(flights).where(and(...conditions));
    }
    return await db.select().from(flights);
  } catch (error) {
    console.error("Error in getAllFlights:", error.message);
    throw error;
  }
  }
 
 export async function getFlightById(id) {
  try {
    const  flight = await db.select().from(flights).where(eq(flights.id, id));
    return flight;
  } catch (error) {
    console.error("Error in getFlightById:", error.message);
    throw error;
  }
}

export async function updateFlight(id, data) {
  try {
    const  flight = await db.update(flights).set(data).where(eq(flights.id, id)).returning();
    return flight;
  } catch (error) {
    console.error("Error in updateFlight:", error.message);
    throw error;
  }
}

export async function deleteFlight(id) {
  try {
    const  flight = await db.delete(flights).where(eq(flights.id, id)).returning();
    return flight;
  } catch (error) {
    console.error("Error in deleteFlight:", error.message);
    throw error;
  }
}