import express from "express";
import { PORT } from "./config/envConfig.js";
import bodyParser from "body-parser";
import cityRoutes from "./routes/cityRoutes.js";
import airplaneRoutes from "./routes/airplaneRoutes.js";
import airportRoutes from "./routes/airportRoutes.js";
import flightRoutes from "./routes/flightRoutes.js";


const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/cities", cityRoutes);
  app.use("/airplanes", airplaneRoutes);
  app.use("/airports", airportRoutes);
  app.use("/flights", flightRoutes);
  
  app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
  });
};

setupAndStartServer();