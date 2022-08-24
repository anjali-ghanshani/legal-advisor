import React, { Fragment, useEffect, useState } from "react";
import EditAppointment from "./EditAppointment";

function ListAppointments() {
  const [avails, setAvails] = useState([]);

  async function deleteTimeSlots(id) {
    console.log(id);
    try {
      const deleteTS = await fetch(
        `${process.env.REACT_APP_API_URL}/appointments/${id}`,
        {
          method: "DELETE"
        }
      );

      setAvails(avails.filter(avail => avail.appointment_id !== id));

      console.log(deleteTS);
      
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getAvailableTimeSlots() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/appointments`);
      const jsonData = await response.json();

      setAvails(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getAvailableTimeSlots();
  }, []);

  // console.log(avails);

  return (
    <Fragment>
      <h1>List of Available Time Slots</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Avalilable Date</th>
            <th scope="col">start time</th>
            <th scope="col">end time</th>
          </tr>
        </thead>
        <tbody>
          {avails.map((avail) => (
            <tr key={avail.appointment_id}>
              <td>{avail.appdate}</td>
              <td>{avail.app_stime}</td>
              <td>{avail.app_etime}</td>
              <td>
              <EditAppointment availDateTime={avail}/>
              </td>
              <td>
                <button onClick={() => deleteTimeSlots(avail.appointment_id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListAppointments;
