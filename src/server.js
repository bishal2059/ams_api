const http = require("http");
const fs = require("fs/promises");

const app = require("./app");
const { loadDoctorsData, loadDoctorsShift } = require("./models/doctors.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

const startServer = async function () {
  try {
    await loadDoctorsData();
    await loadDoctorsShift();
    server.listen(PORT, () => {
      console.log(`Server Listening on http://localhost:8000`);
    });
  } catch (err) {
    console.log(`Internal server issues! Server crashed ${err}`);
  }
};

startServer();
