import { createFlight, getAllFlights, getFlightById, updateFlight, deleteFlight } from "../repository/flightRepository.js";

export async function addFlight(data) {
  try {
    if (!data.flightNumber || !data.airplaneId || !data.airportId || !data.departureTime || !data.arrivalTime) {
      throw new Error("flightNumber, airplaneId, airportId, departureTime, and arrivalTime are required");
    }
    return await createFlight(data);
  } catch (error) {
    console.error("Error in addFlight:", error.message);
    throw error;
  }
}

export async function listFlights() {
  try {
    return await getAllFlights();
  } catch (error) {
    console.error("Error in listFlights:", error.message);
    throw error;
  }
}

export async function fetchFlightById(id) {
  try {
    const flight = await getFlightById(id);
    if (!flight) throw new Error("Flight not found");
    return flight;
  } catch (error) {
    console.error("Error in fetchFlightById:", error.message);
    throw error;
  }
}

export async function editFlight(id, data) {
  try {
    const flight = await updateFlight(id, data);
    if (!flight) throw new Error("Flight not found");
    return flight;
  } catch (error) {
    console.error("Error in editFlight:", error.message);
    throw error;
  }
}

export async function removeFlight(id) {
  try {
    const flight = await deleteFlight(id);
    if (!flight) throw new Error("Flight not found");
    return flight;
  } catch (error) {
    console.error("Error in removeFlight:", error.message);
    throw error;
  }
}