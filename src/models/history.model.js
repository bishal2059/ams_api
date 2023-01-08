const pastAppointment = new Map();

const getAllPastAppointment = function () {
  return Array.from(pastAppointment.values());
};

const addNewPastAppointment = function (data) {
  return pastAppointment.set(data.ticketNo, data);
};

module.exports = {
  getAllPastAppointment,
  addNewPastAppointment,
};
