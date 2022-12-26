import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Forgot from "../pages/Auth/Forgot";
import Verification from "../pages/Auth/Verification";
import FlightDetail from "../pages/FlightDetail";
import Flight from "../pages/Flight";
import Main from "../pages/Main";
import Explore from "../pages/Explore";
import Payment from "../pages/Payment";
import Profile from "../pages/Profile";
import BookingPass from "../pages/BookingPass";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/flight-detail" element={<FlightDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookingpass" element={<BookingPass />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
