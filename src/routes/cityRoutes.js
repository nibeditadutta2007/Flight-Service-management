import express from "express";
import { createCityHandler, getCitiesHandler } from "../controllers/cityController.js";

const router = express.Router();

router.post("/", createCityHandler);   // POST /cities
router.get("/", getCitiesHandler);      // GET /cities

export default router;