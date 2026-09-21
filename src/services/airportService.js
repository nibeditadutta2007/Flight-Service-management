import { createAirport, getAllAirports, getAirportById, updateAirport, deleteAirport } from "../repository/airportRepository.js";

export async function addAirport(data) {
  try {
    if (!data.name || !data.code || !data.cityId) {
      throw new Error("name, code, and cityId are required");
    }
    return await createAirport(data);
  } catch (error) {
    console.error("Error in addAirport:", error.message);
    throw error;
  }
}

export async function listAirports() {
  try {
    return await getAllAirports();
  } catch (error) {
    console.error("Error in listAirports:", error.message);
    throw error;
  }
}

export async function fetchAirportById(id) {
  try {
    const airport = await getAirportById(id);
    if (!airport) throw new Error("Airport not found");
    return airport;
  } catch (error) {
    console.error("Error in fetchAirportById:", error.message);
    throw error;
  }
}

export async function editAirport(id, data) {
  try {
    const airport = await updateAirport(id, data);
    if (!airport) throw new Error("Airport not found");
    return airport;
  } catch (error) {
    console.error("Error in editAirport:", error.message);
    throw error;
  }
}

export async function removeAirport(id) {
  try {
    const airport = await deleteAirport(id);
    if (!airport) throw new Error("Airport not found");
    return airport;
  } catch (error) {
    console.error("Error in removeAirport:", error.message);
    throw error;
  }
}