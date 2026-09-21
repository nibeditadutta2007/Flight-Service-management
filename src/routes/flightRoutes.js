import express from "express";
import {
  createFlightHandler,
  getFlightsHandler,
  getFlightByIdHandler,
  updateFlightHandler,
  deleteFlightHandler,
} from "../controllers/flightController.js";

const router = express.Router();

router.post("/", createFlightHandler);
router.get("/", getFlightsHandler);
router.get("/:id", getFlightByIdHandler);
router.put("/:id", updateFlightHandler);
router.delete("/:id", deleteFlightHandler);

export default router;