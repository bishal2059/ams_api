const { getAllPastAppointment } = require("../../models/history.model");

const getAllPastAppointmentHandler = function (req, res) {
  return res.status(200).json(getAllPastAppointment());
};

module.exports = {
  getAllPastAppointmentHandler,
};
