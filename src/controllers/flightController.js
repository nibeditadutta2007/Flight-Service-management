import { addFlight, listFlights, fetchFlightById, editFlight, removeFlight } from "../services/flightService.js";

export async function createFlightHandler(req, res) {
  try {
    const flight = await addFlight(req.body);
    res.status(201).json({ success: true, data: flight });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function getFlightsHandler(req, res) {
  try {
    const flights = await listFlights(req.query);
    res.status(200).json({ success: true, data: flights });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function getFlightByIdHandler(req, res) {
  try {
    const flight = await fetchFlightById(Number(req.params.id));
    res.status(200).json({ success: true, data: flight });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}

export async function updateFlightHandler(req, res) {
  try {
    const flight = await editFlight(Number(req.params.id), req.body);
    res.status(200).json({ success: true, data: flight });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}

export async function deleteFlightHandler(req, res) {
  try {
    const flight = await removeFlight(Number(req.params.id));
    res.status(200).json({ success: true, data: flight });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
}