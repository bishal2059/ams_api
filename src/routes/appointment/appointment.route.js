const express = require("express");

const {
  getAppointmentHandler,
  postAppointmentHandler,
  deleteAppointmentHandler,
} = require("./appointment.controller");

const appointmentRoute = express.Router();

appointmentRoute.get("/", getAppointmentHandler);
appointmentRoute.post("/", postAppointmentHandler);
appointmentRoute.delete("/:id/:result", deleteAppointmentHandler);

module.exports = appointmentRoute;
