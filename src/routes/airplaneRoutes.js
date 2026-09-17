import express from "express";
import {
  createAirplaneHandler,
  getAirplanesHandler,
  getAirplaneByIdHandler,
  updateAirplaneHandler,
  deleteAirplaneHandler,
} from "../controllers/airplaneController.js";

const router = express.Router();

router.post("/", createAirplaneHandler);
router.get("/", getAirplanesHandler);
router.get("/:id", getAirplaneByIdHandler);
router.put("/:id", updateAirplaneHandler);
router.delete("/:id", deleteAirplaneHandler);

export default router;