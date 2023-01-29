const { addNewPastAppointment } = require("./history.model");

const currentAppointment = new Map();

let currentTicketNo = 1;

const dummyData = {
  firstName: "Shyam",
  lastName: "Prasad",
  email: "ram2015@gmail.com",
  phoneNo: "9845243698",
  doctorName: "Thomas Frank (Cardiologist)",
  //Date is send from postman in the UNIAC Timestamp or UTC String
  date: new Date("Sat, 07 Jan 2023 18:15:00 GMT").toUTCString(),
  shift: "Morning Shift (7:00AM - 9:00AM)",
};

const getAllCurrentAppointment = function () {
  return Array.from(currentAppointment.values());
};

const addNewAppointment = function (data) {
  const docArray = data.doctorName.split(" ");
  const doctorSymbol = docArray[0][0] + docArray[1][0];
  Object.assign(data, {
    ticketNo: `${currentTicketNo}${doctorSymbol}`,
    date: new Date(data.date).toUTCString(),
  });
  currentAppointment.set(data.ticketNo, data);
  currentTicketNo++;
  return data;
};

const checkTicketNumber = function (ticket) {
  return currentAppointment.has(ticket);
};

const deleteAppointmentByTicketNo = function (ticket, result) {
  const deletedDataResult = result === "success" ? true : false;
  const deletedData = Object.assign(currentAppointment.get(ticket), {
    success: deletedDataResult,
  });

  currentAppointment.delete(ticket);

  addNewPastAppointment(deletedData);
  return deletedData;
};

addNewAppointment(dummyData);

module.exports = {
  getAllCurrentAppointment,
  addNewAppointment,
  checkTicketNumber,
  deleteAppointmentByTicketNo,
};
