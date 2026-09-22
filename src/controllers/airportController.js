import { addAirport, listAirports, fetchAirportById, editAirport, removeAirport } from "../services/airportService.js";

export async function createAirportHandler(req, res) {
  try {
    const airport = await addAirport(req.body);
    return res.status(201).json({ success: true, data: airport });
  } catch (error) {
   return  res.status(400).json({ success: false, message: error.message });
  }
}

export async function getAirportsHandler(req, res) {
  try {
    const airports = await listAirports();
    return res.status(200).json({ success: true, data: airports });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function getAirportByIdHandler(req, res) {
  try {
    const airport = await fetchAirportById(Number(req.params.id));
    return res.status(200).json({ success: true, data: airport });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}

export async function updateAirportHandler(req, res) {
  try {
    const airport = await editAirport(Number(req.params.id), req.body);
    return res.status(200).json({ success: true, data: airport });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}

export async function deleteAirportHandler(req, res) {
  try {
    const airport = await removeAirport(Number(req.params.id));
    return res.status(200).json({ success: true, data: airport });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
}