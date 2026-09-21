import { db } from "../config/dbConfig.js";
import { cities } from "../models/schema.js";
export async function createCity(data){
    const city = await db.insert(cities).values(data).returning();
    return city;
}
export async function getAllCities(){
    return await db.select().from(cities);
}