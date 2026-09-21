import express from "express";
import {
  createAirportHandler,
  getAirportsHandler,
  getAirportByIdHandler,
  updateAirportHandler,
  deleteAirportHandler,
} from "../controllers/airportController.js";

const router = express.Router();

router.post("/", createAirportHandler);
router.get("/", getAirportsHandler);
router.get("/:id", getAirportByIdHandler);
router.put("/:id", updateAirportHandler);
router.delete("/:id", deleteAirportHandler);

export default router;