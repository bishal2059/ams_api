const express = require("express");
const path = require("path");

const {
  doctorsRoute,
  doctorsShift,
} = require("./routes/doctors/doctors.route");
const appointmentRoute = require("./routes/appointment/appointment.route");
const historyRoute = require("./routes/history/history.route");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/doctors", doctorsRoute);
app.use("/appointments", appointmentRoute);
app.use("/shifts", doctorsShift);
app.use("/history", historyRoute);



module.exports = app;
