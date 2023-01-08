const {
  getDoctorsData,
  getDoctorsShift,
} = require("../../models/doctors.model");

const doctorsHandler = function (req, res) {
  return res.status(200).json(getDoctorsData());
};

const doctorsShiftHandler = function (req, res) {
  return res.status(200).json(getDoctorsShift());
};

module.exports = { doctorsHandler, doctorsShiftHandler };
