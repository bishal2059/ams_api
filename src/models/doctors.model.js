const fs = require("fs");
const path = require("path");

const availableDoctors = [];
const doctorsShift = [];

const loadDoctorsData = async function () {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "doctors.json")
    )
      .on("data", (data) => {
        availableDoctors.push(JSON.parse(data));
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve();
      });
  });
};

const loadDoctorsShift = async function () {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "shift.json"))
      .on("data", (data) => {
        doctorsShift.push(JSON.parse(data));
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        resolve();
      });
  });
};

const getDoctorsData = function () {
  return availableDoctors[0];
};

const getDoctorsShift = function () {
  return doctorsShift.flat();
};

module.exports = {
  loadDoctorsData,
  loadDoctorsShift,
  getDoctorsData,
  getDoctorsShift,
};
