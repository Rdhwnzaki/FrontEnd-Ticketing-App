import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profile from './pages/Profile';
import BookingPass from './pages/BookingPass';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/bookingpass" element={<BookingPass />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
