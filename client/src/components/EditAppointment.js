import React, { Fragment, useState } from "react";

function EditAppointment({ availDateTime }) {
  const [availDate, setAvailDate] = useState(availDateTime.appdate);
  const [availSTime, setAvailSTime] = useState(availDateTime.app_stime);
  const [availETime, setAvailETime] = useState(availDateTime.app_etime);

  async function updateAppointment(e) {
    e.preventDefault();
    try {
      const body = { availDate, availSTime, availETime };
      const response = await fetch(
        `http://localhost:5000/appointments/${availDateTime.appointment_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location("/");
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log(availDate);
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${availDateTime.appointment_id}`}
      >
        Reschedule
      </button>
      {/* 
      id = id(no. we specify, here its the appointment_id)
       */}
      <div
        class="modal fade"
        id={`id${availDateTime.appointment_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Reschedule Appointment
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="date"
                className="form-control mt-2 mb-2"
                value={availDate}
                onChange={(e) => setAvailDate(e.target.value)}
              />
              <input
                type="time"
                className="form-control mt-2 mb-2"
                value={availSTime}
                onChange={(e) => setAvailSTime(e.target.value)}
              />
              <input
                type="time"
                className="form-control mt-2 mb-2"
                value={availETime}
                onChange={(e) => setAvailETime(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(e) => updateAppointment(e)}
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </Fragment>
  );
}

export default EditAppointment;
