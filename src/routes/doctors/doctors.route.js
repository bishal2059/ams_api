const express = require("express");

const { doctorsHandler, doctorsShiftHandler } = require("./doctors.controller");

const doctorsRoute = express.Router();
const doctorsShift = express.Router();

doctorsRoute.get("/", doctorsHandler);
doctorsShift.get("/", doctorsShiftHandler);

module.exports = { doctorsRoute, doctorsShift };
