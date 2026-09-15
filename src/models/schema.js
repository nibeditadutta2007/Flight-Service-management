import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const airports = pgTable("airports", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  code: text("code").notNull(),
  cityId: integer("city_id").references(() => cities.id).notNull(),
});

export const airplanes = pgTable("airplanes", {
  id: serial("id").primaryKey(),
  modelNumber: text("model_number").notNull(),
  capacity: integer("capacity").notNull(),
});

export const flights = pgTable("flights", {
  id: serial("id").primaryKey(),
  flightNumber: text("flight_number").notNull(),
  airplaneId: integer("airplane_id").references(() => airplanes.id).notNull(),
  airportId: integer("airport_id").references(() => airports.id).notNull(),
  departureTime: timestamp("departure_time").notNull(),
  arrivalTime: timestamp("arrival_time").notNull(),
});