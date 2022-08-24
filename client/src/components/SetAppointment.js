import React, { Fragment, useState } from "react";

function SetAppointment() {
  //   var today = new Date();
  //   var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [aptDate, setAptDate] = useState("");
  const [aptStTime, setAptStTime] = useState("");
  const [aptETime, setAptETime] = useState("");

  async function onSet(e) {
    e.preventDefault();
    try {
      const body = {
        appdate: aptDate,
        app_stime: aptStTime,
        app_etime: aptETime,
      };
      const response = await fetch(`${process.env.REACT_APP_API_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/appointments";
    setAptDate("");
    setAptStTime("");
    setAptETime("");
  }

  return (
    <Fragment>
      <h1 className=" mt-5">Schedule Appointment</h1>
      <form className="flex mt-5" onSubmit={onSet}>
        <label className="" htmlFor="start">
          Date
        </label>
        <input
          type="date"
          id="start"
          className="form-control mt-2 mb-2"
          value={aptDate}
          //   min={date}
          //   max="2030-12-31"
          onChange={(e) => setAptDate(e.target.value)}
        />
        <label htmlFor="start-time">Appointment Start Time</label>
        <input
          id="start-time"
          type="time"
          className="form-control mt-2 mb-2"
          //   min="09:00:00"
          //   max="18:00:00"
          value={aptStTime}
          onChange={(e) => setAptStTime(e.target.value)}
        />
        <label htmlFor="end-time">Appointment End Time</label>

        <input
          id="end-time"
          type="time"
          className="form-control mt-2 mb-2"
          //   min="09:00:00"
          //   max="18:00:00"
          value={aptETime}
          onChange={(e) => setAptETime(e.target.value)}
        />

        <button className="btn btn-success">Set</button>
      </form>
    </Fragment>
  );
}

export default SetAppointment;
