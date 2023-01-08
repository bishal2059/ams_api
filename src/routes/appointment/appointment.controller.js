const {
  getAllCurrentAppointment,
  addNewAppointment,
  checkTicketNumber,
  deleteAppointmentByTicketNo,
} = require("../../models/appointment.model");
const verifyUserData = require("./verify");

const getAppointmentHandler = function (req, res) {
  return res.status(200).json(getAllCurrentAppointment());
};

const postAppointmentHandler = function (req, res) {
  const data = req.body;
  console.log(data);
  (async function () {
    try {
      const verifiedData = await verifyUserData(data);
      const addedData = addNewAppointment(verifiedData);
      res.status(201).json(addedData);
    } catch (err) {
      res.status(400).json(err);
    }
  })();

  // if (errMessage) {
  //   return res.status(401).json(errMessage);
  // }
  // const createdData = addNewAppoitment(verifiedData);
  // return res.status(201).json(createdData);
};

const deleteAppointmentHandler = function (req, res) {
  const ticketNo = req.params.id;
  const result = req.params.result;
  if (!result === "success" || !result === "failure") {
    return res.status(400).json({ error: "Result parameter missing" });
  }
  if (!checkTicketNumber(ticketNo)) {
    return res.status(404).json({ error: "Ticket not found" });
  }
  const removedData = deleteAppointmentByTicketNo(ticketNo, result);
  return res.status(200).json(removedData);
};

module.exports = {
  getAppointmentHandler,
  postAppointmentHandler,
  deleteAppointmentHandler,
};
