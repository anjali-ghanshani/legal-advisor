import { Fragment } from 'react';
import './App.css';

// components

import SetAppointment from './components/SetAppointment';
import ListAppointments from './components/ListAppointments';

function App() {
  return (
    <Fragment>
    <div className="container">
      <SetAppointment />
      <hr/>
      <ListAppointments />
    </div>
    </Fragment>
  )
  }
  
  

export default App;
