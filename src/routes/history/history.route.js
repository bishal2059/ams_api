const express = require("express");

const { getAllPastAppointmentHandler } = require("./history.controller");

const historyRoute = express.Router();

historyRoute.get("/", getAllPastAppointmentHandler);

module.exports = historyRoute;
