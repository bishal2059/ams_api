const fs = require("fs");
const path = require("path");

const validator = require("validator");

const doctorsName = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "..", "..", "..", "data", "doctors.json")
  )
).map((data) => {
  return `${data.name} (${data.type})`;
});

const doctorsShift = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "..", "..", "data", "shift.json"))
);

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

const verifyUserData = function (userData) {
  return new Promise((resolve, reject) => {
    if (!userData.firstName) reject({ error: "Missing First Name" });
    if (!userData.lastName) reject({ error: "Missing Last Name" });
    if (!userData.email) reject({ error: "Missing email address" });
    if (!userData.phoneNo) reject({ error: "Missing phone.No" });
    if (!userData.doctorName) reject({ error: "Missing Doctor Name" });
    if (!userData.date) reject({ error: "Missing Appointment Date" });
    if (!userData.shift) reject({ error: "Missing Appointment Shift" });

    if (!onlyLetters(userData.firstName))
      reject({ error: "Invalid First Name" });
    if (!onlyLetters(userData.lastName)) reject({ error: "Invalid Last Name" });
    if (!validator.isEmail(userData.email)) {
      reject({ error: "Invalid Email" });
    }
    if (userData.phoneNo.length !== 10 || !userData.phoneNo.startsWith("98")) {
      reject({ error: "Invalid Phone.no" });
    }
    if (!doctorsName.includes(userData.doctorName)) {
      reject({ error: "Invalid Doctor Name" });
    }
    if (!doctorsShift.includes(userData.shift)) {
      reject({ error: "Invalid Appointment Shift" });
    }
    const appointmentDate = new Date(userData.date);
    if (!(appointmentDate.getDay() > 0 && appointmentDate.getDay() < 6)) {
      reject({ error: "Invalid Date (Monday-Friday only)" });
    }
    if (appointmentDate - Date.now() < 0) {
      reject({ error: "Invalid Appointment Date" });
    }
    resolve(userData);
  });
};

module.exports = verifyUserData;
