const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); // everytime I am going to interact with the client I am going to access the req.body for which I need express.json()

// ROUTES//

// register and login routes

app.use("/auth", require("./routes/jwtAuth"));

// dashboard route

app.use("/dashboard", require("./routes/dashboard"));

//create an appointment
app.post("/appointments", async (req, res) => {
  try {
    const { appdate, app_stime, app_etime } = req.body;
    const newAppointment = await pool.query(
      "INSERT INTO appointment (appdate,app_stime,app_etime) VALUES($1,$2,$3) RETURNING *",
      [appdate, app_stime, app_etime]
    );

    res.json(newAppointment.rows[0]);
    console.log(res.json(newAppointment.rows[0]));
  } catch (err) {
    console.error(err.message);
  }
});

// get all appointment

app.get("/appointments", async (req, res) => {
  try {
    const allAppointments = await pool.query("SELECT * FROM appointment");
    res.json(allAppointments.rows);
    console.log(res.json(allAppointments.rows));
  } catch (err) {
    console.error(err.message);
  }
});

// get an appointment

app.get("/appointments/:appointment_id", async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const appointments = await pool.query(
      "SELECT * FROM appointment WHERE appointment_id = $1",
      [appointment_id]
    );

    res.json(appointments.rows[0]);
    console.log(res.json(appointments.rows[0]));
  } catch {
    console.error(err.message);
  }
});
// update an appointment

app.put("/appointments/:appointment_id", async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const { app_stime } = req.body;
    const updateAppointment = await pool.query(
      "UPDATE appointment SET app_stime = $1 WHERE appointment_id = $2",
      [app_stime, appointment_id]
    );

    res.json("The row was updated");
  } catch {
    console.error(err.message);
  }
});

// delete an appointment

app.delete("/appointments/:appointment_id", async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const deleteAppointment = await pool.query(
      "DELETE FROM appointment WHERE appointment_id = $1",
      [appointment_id]
    );

    res.json("The record was deleted");
  } catch {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
