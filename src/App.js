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
function App() {

  return (<div className="app">
    <Router>

      <Routes>
        <Route path='/' element={<BookApointment />} />
        <Route path='/appointment-details' element={<AppointmentDetails />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/results' element={<Results />} />
        <Route path='/scheduled-visits' element={<ScheduledVisits />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </Router>
  </div>);
}

export default App;
