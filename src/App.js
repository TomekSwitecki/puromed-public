import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./Sections/Profile/Profile";
import { Navbar } from "./Components/Navbar/Navbar";
import BookApointment from "./Sections/BookApointment/BookApointment";
import { Registration } from "./Sections/Registration/Registration";
import { Login } from "./Sections/Login/Login";
import History from "./Sections/History/History";
import ScheduledVisits from "./Sections/ScheduledVisits/ScheduledVisits";
import Results from "./Sections/Results/Results";
import AppointmentDetails from "./Sections/AppointmentDetails/AppointmentDetails";
import { HashRouter } from "react-router-dom";
function App() {

  return (<div className="app">
    <HashRouter>

      <Routes>
        <Route path='/booking' element={<BookApointment />} />
        <Route path='/appointment-details' element={<AppointmentDetails />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/results' element={<Results />} />
        <Route path='/scheduled-visits' element={<ScheduledVisits />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </HashRouter>
  </div>);
}

export default App;
