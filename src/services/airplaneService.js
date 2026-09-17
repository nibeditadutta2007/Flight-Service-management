import { createAirplane, getAllAirplanes, getAirplaneById, updateAirplane, deleteAirplane } from "../repository/airplaneRepository.js";

export async function addAirplane(data) {
  try {
    if (!data.modelNumber || !data.capacity) {
      throw new Error("modelNumber and capacity are required");
    }
    return await createAirplane(data);
  } catch (err) {
    console.error("Error in addAirplane:", err.message);
    throw err;
  }
}

export async function listAirplanes() {
  try {
    return await getAllAirplanes();
  } catch (err) {
    console.error("Error in listAirplanes:", err.message);
    throw err;
  }
}

export async function fetchAirplaneById(id) {
  try {
    const airplane = await getAirplaneById(id);
    if (!airplane) throw new Error("Airplane not found");
    return airplane;
  } catch (err) {
    console.error("Error in fetchAirplaneById:", err.message);
    throw err;
  }
}

export async function editAirplane(id, data) {
  try {
    const airplane = await updateAirplane(id, data);
    if (!airplane) throw new Error("Airplane not found");
    return airplane;
  } catch (err) {
    console.error("Error in editAirplane:", err.message);
    throw err;
  }
}

export async function removeAirplane(id) {
  try {
    const airplane = await deleteAirplane(id);
    if (!airplane) throw new Error("Airplane not found");
    return airplane;
  } catch (err) {
    console.error("Error in removeAirplane:", err.message);
    throw err;
  }
}